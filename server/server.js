require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const config = require('../config')
const app = express()
const router = require('./router')
const bootstrap = require('./bootstrap')

app.use(router)
bootstrap.compose()

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
  app.listen(process.env.PORT || 3000, () =>
    console.log('token server running on 3000'),
  )
}

module.exports = app
