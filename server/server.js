require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const morgan = require('morgan')
const cors = require('cors')
const app = express()


// Middleware
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => console.log('Connected to MongoDB'))


// Routes
app.use('/auth', require('./src/routes/auth'))
app.use('/questions', require('./src/routes/questions'))
app.use('/answers', require('./src/routes/answers'))

function logRoutes(app) {
  app._router.stack.forEach((middleware) => {
    if (middleware.route) {
      console.log(`${middleware.route.stack[0].method.toUpperCase()} ${middleware.route.path} (direct)`);
    } else if (middleware.name === "router") {
      middleware.handle.stack.forEach((handler) => {
        if (handler.route) {
          console.log(`${handler.route.stack[0].method.toUpperCase()} ${handler.route.path} (in '${middleware.regexp}' middleware)`);
        }
      });
    }
  });
}
logRoutes(app);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on port', process.env.PORT || 3000)
})
