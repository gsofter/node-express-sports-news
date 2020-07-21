require('dotenv').config()
const cors = require('cors')
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const config = require('../config')
const app = express()
const router = require('./router')

connect()
function connect() {
  mongoose.connection
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', function () {
      console.log('MONGO connected')
      listen()
    })
  return mongoose.connect(config.db, {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

function listen() {
  const whitelist = [
    'http://localhost:3000',
    'http://localhost:5000',
    'http://fantalks.com',
  ]
  const corsOptions = {
    origin: whitelist,
  }
  app.use(cors(corsOptions))
  app.use('/api', router)
  app.use(express.static('./build/'))
  app.get('*', function (req, res) {
    res.sendFile(path.resolve('build', 'index.html'))
  })
  console.log(process.env.PORT)
  app.listen(process.env.PORT || 5000, () =>
    console.log('Server running on 5000'),
  )
}

module.exports = { connect }
