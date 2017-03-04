// server.js
var express = require('express')
var methodOverride = require('method-override')
var cookieParser = require('cookie-parser')
var compression = require('compression')
var bodyParser = require('body-parser')
var session = require('express-session')
var morgan = require('morgan')
var path = require('path')
var favicon = require('serve-favicon')
var config = require('./config')

// db
var mongoose = require('mongoose')
var models = require('./app/models/models')

/***
*
* Connect to the Mongoose db
*
***/

mongoose.connect('mongodb://localhost/' + config.db)
mongoose.connection.on('error', (err) => {
  console.log(err)
})

/***
*
* Configure Express production server
*
***/

// initialize the server
const app = express()

// send compressed assets
app.use(compression())

// provide a session secret
app.use(session({
  secret: 'hello_cello',
  name: '',
  proxy: true,
  resave: true,
  saveUninitialized: true
}))

// serve files from the build directory
app.use(express.static(path.join(__dirname, 'build')))

// enable the cookie parser
app.use(cookieParser())

// enable the body parser
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

// enable method overrides
app.use(methodOverride())

// enable logging
morgan('combined', {
  skip: (req, res) => { return res.statusCode < 400 }
})

/***
*
* Data routes
*
***/

app.get('/api/records', (req, res) => {
  var query = {}

  if (req.query.record) {
    query.record = req.query.record
  }

  models.record.find(query,
    (err, data) => {
      if (err) return res.status(500).send({cause: err})
      return res.status(200).send(data)
  })
})

/***
*
* New records
*
***/

app.post('/api/records/new', (req, res) => {
  record = new models.record(req.body);

  record.save((err, data) => {
    if (err) return res.status(500).send({cause: err})
    return res.status(200).send(data)
  })
})

/***
*
* View routes
*
***/

// send requests to index.html so browserHistory in React Router works
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// ask server to listen on desired port
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log('Production Express server running at localhost:' + PORT)
})