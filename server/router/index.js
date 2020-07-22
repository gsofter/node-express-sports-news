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

router.get('/teams', async (req, res, next) => {
  const teams = await Team.find({})
  res.send(teams)
})

router.get('/languages', async (req, res, next) => {
  const languages = await Language.find({}).select('code name')
  res.send(languages)
})

router.get('/articles/country/:countryName', async (req, res, next) => {
  const { countryName } = req.params
  const articles = await Article.find({ country: countryName })
    .sort('-pub_date')
    .select('title pub_date country language team feed link')
  res.send(articles)
})

router.get('/articles/team/:teamName', async (req, res, next) => {
  const { teamName } = req.params
  const articles = await Article.find({ team: teamName })
    .sort('-pub_date')
    .select('title pub_date country language team feed link')
  res.send(articles)
})

router.get('/articles/language/:languageCode', async (req, res, next) => {
  const { languageCode } = req.params
  const articles = await Article.find({ language: languageCode })
    .sort('-pub_date')
    .select('title pub_date country language team feed link')
  res.send(articles)
})
router.get('/articles/search/', async (req, res, next) => {
  const { languageCode, searchText } = req.query
  const articles = await Article.find({
    language: languageCode,
    title: {
      $regex: searchText,
      $options: 'i',
    },
  })
    .sort('-pub_date')
    .select('title pub_date country language team feed link')
  res.send(articles)
})
module.exports = router
