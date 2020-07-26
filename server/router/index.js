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
const LangFeed = mongoose.model('langfeed')
const TeamFeed = mongoose.model('teamfeed')

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
    .limit(500)
  res.send(articles)
})

router.get('/articles/team/:teamName', async (req, res, next) => {
  const { teamName } = req.params
  const articles = await Article.find({ team: teamName })
    .sort('-pub_date')
    .select('title pub_date country language team feed link')
    .limit(500)
  res.send(articles)
})

router.get('/articles/language/:languageCode', async (req, res, next) => {
  const { languageCode } = req.params
  const articles = await Article.find({ language: languageCode })
    .sort('-pub_date')
    .select('title pub_date country language team feed link')
    .limit(500)
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
    .limit(500)
  res.send(articles)
})

// admin routes
router.get('/feeds/lang', async (req, res) => {
  const langFeeds = await LangFeed.find({})
  res.send(langFeeds)
})
router.get('/feeds/team', async (req, res) => {
  const teamFeeds = await TeamFeed.find({})
  res.send(teamFeeds)
})

router.post('/lang/new', async (req, res, next) => {
  const newData = req.body
  const newLanguage = new Language(newData)
  try {
    await newLanguage.save()
    res.send(newLanguage)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.post('/lang/update', async (req, res, next) => {
  const { langId, newData } = req.body
  try {
    const updated = await Language.findByIdAndUpdate(langId, newData)
    res.send(updated)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.delete('/lang/:id', async (req, res, next) => {
  try {
    const removed = await Language.findByIdAndDelete(req.params.id)
    if (!removed) res.status(404).send('No item found')
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
})

router.post('/country', async (req, res, next) => {
  const newData = req.body
  console.log('newData', newData)
  const newCountry = new Team(newData)
  try {
    await newCountry.save()
    res.send(newCountry)
  } catch (err) {
    console.log('err', err)
    res.status(500).send(err)
  }
})

router.patch('/country/:id', async (req, res, next) => {
  const countryId = req.params.id
  const updateData = req.body
  try {
    const updated = await Team.findByIdAndUpdate(countryId, updateData)
    res.send(updated)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.delete('/country/:id', async (req, res, next) => {
  try {
    const removed = await Team.findByIdAndDelete(req.params.id)
    if (!removed) res.status(404).send('No item found')
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = router
