const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  answerCount: {
    type: Number,
    default: 0,
  },
  author: {
    type: String,
    required: true,
  },
  updated: {
    type: Boolean,
    default: false,
  },
})
const Question = mongoose.model('Question', questionSchema)

module.exports = Question
