const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const User = require('../models/User')

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET

async function authenticateToken(req, res, next) {
  // Get the token from the Authorization header
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.sendStatus(401)
  }

  // Verify and decode the token
  jwt.verify(token, JWT_SECRET, async (err, decodedToken) => {
    if (err) {
      return res.sendStatus(403)
    }

    try {
      console.log(decodedToken.user.id)
      const user = await User.findById(decodedToken.user.id)

      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }

      req.user = user
      console.log(`user:${user.id}`)
      next()
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Error fetching user' })
    }
  })
}
module.exports = { authenticateToken }
