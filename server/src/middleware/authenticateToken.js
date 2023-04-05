const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const User = require('../Models/User')

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET

async function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' })
  }

  jwt.verify(token, JWT_SECRET, async (err, decodedToken) => {
    if (err) {
      return res.status({
        message:
          'Invalid token, please login again or register you have not registered yet',
      })
    }

    try {
      const user = await User.findById(decodedToken.user.id)

      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }

      req.user = user
      next()
    } catch (error) {
      res.status(500).json({ message: 'Error fetching user' })
    }
  })
}
module.exports = { authenticateToken }
