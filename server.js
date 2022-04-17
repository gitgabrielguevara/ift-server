// require packages
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const rowdy = require('rowdy-logger')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const pdfTemplate = require('./documents');

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
app.use(express.urlencoded({ extended: true })) // changed to true 4-16
app.use(express.json())

app.post('/create-pdf', (req, res) => {
  console.log(req.body)
  pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
      if(err) {
          res.send(Promise.reject());
      }

      res.send(Promise.resolve());
  });
});

app.get('/fetch-pdf', (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`)
})

// request document route
app.use('/api/document', require('./controllers/api-v1/document-route'))

const middleWare = (req, res, next) => {
  console.log('im a middleware 😬!')
  res.locals.myData = '😱'
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

