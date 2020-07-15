'use strict'

/*
 * nodejs-feedparser
 * Copyright(c) 2020 gurusoft13
 * MIT Licensed
 */

/**
 * Module dependencies
 */

require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const config = require('./config')
const app = express()

module.exports = app
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
    console.log('token server running on 5000'),
  )
}
