const mongoose = require('mongoose')

const answerSchema = new mongoose.Schema({
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    ref: 'User.name',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  likesCount: {
    type: Number,
    default: 0,
  },
  dislikes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  dislikesCount: {
    type: Number,
    default: 0,
  },
  updated: {
    type: Boolean,
    default: false,
  },
  updatedAt: {
    type: Date,
  },
})

const Answer = mongoose.model('Answer', answerSchema)

module.exports = Answer
