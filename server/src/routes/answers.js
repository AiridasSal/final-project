const app = require('express').Router()
const Question = require('../Models/Question')
const Answer = require('../Models/Answer')
const User = require('../Models/User')
const { authenticateToken } = require('../middleware/authenticateToken')
const { updateUserQuestionCount } = require('../middleware/questionCount')
const { updateUserAnswerCount } = require('../middleware/answerCount')
const { check, validationResult } = require('express-validator')

app.get('/', async(req, res) =>{
    const answers = await Answer.find()
    res.send(answers)
  })
  app.get('/:id/answers', async (req, res) => {
    const answers = await Answer.find({ question: req.params.id })
    res.send(answers)
  })
  app.get('/answers/:id', async (req, res) => {
    const answer = await Answer.findById(req.params.id)
    res.send(answer)
  })
  app.post('/:id/answers', authenticateToken,[
    check('body').notEmpty().withMessage('Body is required'),
  ], updateUserAnswerCount, async (req, res) => {
    const answer = new Answer({
      question: req.params.id,
      body: req.body.body,
      author: req.user.name,
    })
    await answer.save()
    await Question.findByIdAndUpdate(req.params.id, {
      $inc: { answerCount: 1 },
    }),
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
          updatedAt: new Date().toLocaleString()
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
  app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' })
  })
  module.exports = app