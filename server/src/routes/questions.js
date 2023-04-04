const app = require('express').Router()
const Question = require('../models/Question')
const Answer = require('../models/Answer')
const User = require('../models/User')
const { authenticateToken } = require('../middleware/authenticateToken')
const { check, validationResult } = require('express-validator')

app.get('/questions', async (req, res) => {
  const query = req.query.query || ''
  const category = req.query.category || 'title'
  const sortParam = req.query.sort || 'date'
  const limit = parseInt(req.query.limit) || 10

  // Parse filter and sort options as JSON objects
  let filter = {}
  let sort = {}

  if (query) {
    filter[category] = {
      $regex: query,
      $options: 'i', // Case-insensitive search
    }
  }

  if (sortParam === 'Latest') {
    sort.createdAt = -1
  }
  if (sortParam === 'Oldest') {
    sort.createdAt = 1
  }
  if (sortParam === 'Most Answers') {
    sort.answerCount = -1
  }
  if (sortParam === 'Least Answers') {
    sort.answerCount = 1
  }
  // Apply filter, sort, and limit options to the query
  const questions = await Question.find(filter).sort(sort).limit(limit)

  res.send(questions)
})
app.get('/', async (req, res) => {
  const filter = req.query.filter || {}
  const sort = req.query.sort || {}

  const questions = await Question.find(filter).sort(sort)
  res.send(questions)
})
app.get('/:id', async (req, res) => {
  const question = await Question.findById(req.params.id)
  res.send(question)
})
app.post(
  '/',
  authenticateToken,

  [
    check('title').notEmpty().withMessage('Title is required'),
    check('body').notEmpty().withMessage('Body is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const question = new Question({
      title: req.body.title,
      body: req.body.body,
      author: req.user.name,
    })
    await question.save()
    res.send(question)
  }
)

app.patch('/:id', authenticateToken, async (req, res) => {
  try {
    const question = await Question.findById(req.params.id)
    if (!question) {
      return res.status(404).send({ message: 'Question not found' })
    }

    if (req.user.name.toString() !== question.author.toString()) {
      return res
        .status(403)
        .send({ message: 'You are not the author of this question' })
    }

    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title: req.body.title,
          body: req.body.body,
          updated: true,
        },
      },
      { new: true }
    )

    // Send the updated question
    res.send(updatedQuestion)
  } catch (error) {
    res.status(500).send({ message: 'Error updating the question' })
  }
})

app.delete('/:id', authenticateToken, async (req, res) => {
  await Question.findByIdAndDelete(req.params.id)
  res.sendStatus(204)
})

app.get('/:id/answers', async (req, res) => {
  const answers = await Answer.find({ question: req.params.id })
  res.send(answers)
})
app.get('/answers/:id', async (req, res) => {
  const answer = await Answer.findById(req.params.id)
  console.log(answer)
  res.send(answer)
})
app.post('/:id/answers', authenticateToken, async (req, res) => {
  const answer = new Answer({
    question: req.params.id,
    body: req.body.body,
    author: req.user.name,
  })
  await answer.save()
  await Question.findByIdAndUpdate(req.params.id, {
    $inc: { answerCount: 1 },
  })
  res.send(answer)
})
app.patch('/answers/:id/like', authenticateToken, async (req, res) => {
  const answer = await Answer.findById(req.params.id)
  if (!answer) {
    return res.status(404).json({ message: 'Answer not found' })
  }
  const userId = req.user.id
  if (answer.dislikes.includes(userId)) {
    answer.dislikes.pull(userId)
    answer.dislikesCount--
  }
  if (answer.likes.includes(userId)) {
    answer.likes.pull(userId)
    answer.likesCount--
  } else {
    answer.likes.push(userId)
    answer.likesCount++
  }
  await answer.save()
  res.send(answer)
})

app.patch('/answers/:id/dislike', authenticateToken, async (req, res) => {
  const answer = await Answer.findById(req.params.id)
  if (!answer) {
    return res.status(404).json({ message: 'Answer not found' })
  }
  const userId = req.user.id
  if (answer.likes.includes(userId)) {
    answer.likes.pull(userId)
    answer.likesCount--
  }
  if (answer.dislikes.includes(userId)) {
    answer.dislikes.pull(userId)
    answer.dislikesCount--
  } else {
    answer.dislikes.push(userId)
    answer.dislikesCount++
  }
  await answer.save()
  res.send(answer)
})

app.patch('/answers/:id', authenticateToken, async (req, res) => {
  const answer = await Answer.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        ...req.body,
        updated: true,
        updatedAt: Date.now(),
      },
    },
    { new: true }
  )
  res.send(answer)
})

app.delete('/answers/:id', authenticateToken, async (req, res) => {
  await Answer.findByIdAndDelete(req.params.id)

  res.status(204).json({ message: 'Answer deleted' })
})

module.exports = app
