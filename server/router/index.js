const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/feed')
require('../models/team')
require('../models/article')
const Team = mongoose.model('team')
const Article = mongoose.model('article')

router.get('/test', async (req, res, next) => {
  res.send('testing')
})

router.get('/api/teams', async (req, res, next) => {
  const teams = await Team.find({})
  console.log('/api/teams')
  res.send(teams)
})

router.get('/api/articles/country/:countryName', async (req, res, next) => {
  const { countryName } = req.params
  const articles = await Article.find({})
  console.log('/api/articles/country/')
})
module.exports = router
