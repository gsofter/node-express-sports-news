import express from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import * as config from '../config'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import App from '../src/App'
import dotenv from 'dotenv'
import router from './router'
import { Helmet } from 'react-helmet'
dotenv.config()
const history = createMemoryHistory()
const app = express()

connect()
function connect() {
  mongoose.connection
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', function () {
      console.log('MONGO connected')
      listen()
    })

  console.log('process.env.MONGO_URL', process.env.MONGO_URL)
  return mongoose.connect(process.env.MONGO_URL, {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

function listen() {
  const whitelist = [
    'http://localhost:3000',
    'http://localhost:5000',
    'https://fantalks.com',
  ]
  const corsOptions = {
    origin: whitelist,
  }
  app.use(cors(corsOptions))
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use('/api', router)
  app.use('/uploads', express.static('uploads'))
  app.use(express.static('./build/'))
  app.get('*', function (req, res) {
    const context = {}
    const app = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context} history={history}>
        <App />
      </StaticRouter>,
    )

    fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
      if (err) {
        console.log('err', err)
        return res.status(500).send('some error happened')
      }
      const helmet = Helmet.renderStatic()
      console.log('helmet', helmet.meta.toString())
      return res.send(
        data
          .replace('<div id="root"> </div>', `<div id="root"> ${app} </div>`)
          .replace('<title>Fantalk</title>', helmet.title.toString())
          .replace('<meta name="_meta_title" />', helmet.meta.toString()),
      )
    })
  })
  console.log(process.env.PORT)
  app.listen(process.env.PORT || 5000, () =>
    console.log('Server running on 5000'),
  )
}

function formatHTML(appStr, helmet) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id="root">
          ${appStr}
        </div>
        <script src="./bundle.js"></script>
      </body>
    </html>
  `
}
