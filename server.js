// require packages
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const rowdy = require('rowdy-logger')
const morgan = require('morgan')


// connect to the db for user
const db = require('./models')
db.connect()

const {errorHandler} = require('./middleware/errorMiddleware')

// connect to the db for the document
// const connectDB = require('./config/db')
// connectDB()

// config express app
const app = express()
const PORT = process.env.PORT || 3001 
// for debug logging 
const rowdyResults = rowdy.begin(app)
app.use(morgan('tiny'))
// cross origin resource sharing 
app.use(cors())
// request body parsing
app.use(express.urlencoded({ extended: false })) // optional 
app.use(express.json())


// request document route
app.use('/api/document', require('./controllers/api-v1/document-route'))

// app.use((req, res, next) => {
//   console.log('im a middleware 😬!')
//   next()
// })

const middleWare = (req, res, next) => {
  console.log('im a middleware 😬!')
  res.locals.myData = '👾'
  next()
}

// GET / -- test index route
app.get('/', middleWare, (req, res) => {
  console.log(res.locals)
  res.json({ msg: 'hello backend 🤖' })
})

// controllers
app.use('/api-v1/users', require('./controllers/api-v1/users.js'))

app.use(errorHandler)

// hey listen
app.listen(PORT, () => {
  rowdyResults.print()
  console.log(`🎧 listenting to PORT ${PORT} 🎧`)
})

