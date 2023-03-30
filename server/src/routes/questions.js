const app = require('express').Router();
const Question = require('../models/Question');
const Answer = require('../models/Answer');
const User = require('../models/User');
const { authenticateToken } = require('../middleware/authenticateToken');
const { check, validationResult } = require('express-validator')


app.get('/', async (req, res) => {
    const questions = await Question.find({})
    res.send(questions)
})
app.get('/:id', async (req, res) => {
    const question = await Question.findById(req.params.id)
    res.send(question)
})
app.post(
    '/', authenticateToken,

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
        })
        await question.save()
        res.send(question)
    }
)

app.patch('/:id', authenticateToken, async (req, res) => {
    const question = await Question.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        { new: true }
    )
    res.send(question)
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
    console.log(answer);
    res.send(answer)
})
app.post('/:id/answers', authenticateToken, async (req, res) => {
    const answer = new Answer({
        question: req.params.id,
        body: req.body.body,
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
    res.sendStatus(204)
})

module.exports = app;