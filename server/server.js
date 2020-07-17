require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const config = require('../config')
const app = express()
const router = require('./router')
const bootstrap = require('./bootstrap')

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
  bootstrap.compose()
  const whitelist = ['http://localhost:3000']
  const corsOptions = {
    origin: whitelist,
  }
  app.use(cors(corsOptions))
  app.use(router)
  app.listen(process.env.PORT || 5000, () =>
    console.log('Server running on 5000'),
  )
}

module.exports = app
