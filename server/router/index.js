const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/feed')
require('../models/team')
require('../models/article')
require('../models/language')

const Team = mongoose.model('team')
const Language = mongoose.model('language')
const Article = mongoose.model('article')

router.get('/test', async (req, res, next) => {
  res.send('testing')
})

router.get('/api/teams', async (req, res, next) => {
  const teams = await Team.find({})
  res.send(teams)
})

router.get('/api/languages', async (req, res, next) => {
  const languages = await Language.find({}).select('code name')
  res.send(languages)
})

router.get('/api/articles/country/:countryName', async (req, res, next) => {
  const { countryName } = req.params
  const articles = await Article.find({ country: countryName })
    .sort('-pub_date')
    .select('title pub_date country language team feed link')
    .limit(40)
  res.send(articles)
})

router.get('/api/articles/team/:teamName', async (req, res, next) => {
  const { teamName } = req.params
  const articles = await Article.find({ team: teamName })
    .sort('-pub_date')
    .select('title pub_date country language team feed link')
    .limit(40)
  res.send(articles)
})

router.get('/api/articles/language/:languageCode', async (req, res, next) => {
  const { languageCode } = req.params
  const articles = await Article.find({ language: languageCode })
    .sort('-pub_date')
    .select('title pub_date country language team feed link')
    .limit(40)
  res.send(articles)
})

module.exports = router
