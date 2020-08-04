const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')
const jwt = require('jsonwebtoken')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, Date.now() + path.extname(file.originalname))
  },
})

const fileFilter = (req, file, cb) => {
  // eslint-disable-next-line eqeqeq
  if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({ storage: storage, fileFilter: fileFilter })

require('../models/feed')
require('../models/team')
require('../models/article')
require('../models/language')
require('../models/banner')
require('../models/user')

const Team = mongoose.model('team')
const Language = mongoose.model('language')
const Article = mongoose.model('article')
const LangFeed = mongoose.model('langfeed')
const TeamFeed = mongoose.model('teamfeed')
const Banner = mongoose.model('banner')
const User = mongoose.model('user')

router.get('/test', async (req, res, next) => {
  res.send('testing')
})

router.get('/teams', async (req, res, next) => {
  const teams = await Team.find({})
  res.send(teams)
})

router.get('/languages', async (req, res, next) => {
  const languages = await Language.find({})
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

router.post('/feeds/lang', async (req, res, next) => {
  const newData = req.body
  const newLangFeed = new LangFeed(newData)
  try {
    await newLangFeed.save()
    res.send(newLangFeed)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.patch('/feeds/lang/:feedId', async (req, res, next) => {
  const newData = req.body
  try {
    const removed = await LangFeed.findByIdAndUpdate(req.params.feedId, newData)
    if (!removed) res.status(404).send('No item found')
    res.status(200).send()
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})

router.delete('/feeds/lang/:feedId', async (req, res, next) => {
  try {
    const removed = await LangFeed.findByIdAndDelete(req.params.feedId)
    if (!removed) res.status(404).send('No item found')
    res.status(200).send()
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})

router.get('/feeds/team', async (req, res) => {
  const teamFeeds = await TeamFeed.find({})
  res.send(teamFeeds)
})

router.post('/feeds/team', async (req, res, next) => {
  const newData = req.body
  const newTeamFeed = new TeamFeed(newData)
  try {
    await newTeamFeed.save()
    res.send(newTeamFeed)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.patch('/feeds/team/:feedId', async (req, res, next) => {
  const newData = req.body
  try {
    const removed = await TeamFeed.findByIdAndUpdate(req.params.feedId, newData)
    if (!removed) res.status(404).send('No item found')
    res.status(200).send()
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})

router.delete('/feeds/team/:feedId', async (req, res, next) => {
  try {
    const removed = await TeamFeed.findByIdAndDelete(req.params.feedId)
    if (!removed) res.status(404).send('No item found')
    res.status(200).send()
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
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
    console.log(err)
    res.status(500).send(err)
  }
})

router.post('/team/:country', async (req, res, next) => {
  const country = req.params.country
  const newData = req.body

  try {
    const targetCountry = await Team.findOne({ country })
    if (!targetCountry) throw new Error()
    targetCountry.teams.push(newData)
    targetCountry
      .save()
      .then((updated) => res.send(updated))
      .catch((err) => console.log(err))
  } catch (err) {
    console.log('err', err)
    res.status(500).send(err)
  }
})

router.patch('/team/:teamId', async (req, res, next) => {
  const teamId = req.params.teamId
  const newData = req.body
  try {
    const targetCountry = await Team.findOne({ 'teams._id': teamId })
    const targetTeamIndex = targetCountry.teams.findIndex(
      // eslint-disable-next-line eqeqeq
      (team) => team._id == teamId,
    )
    targetCountry.teams[targetTeamIndex] = newData
    targetCountry
      .save()
      .then((updated) => res.send(updated))
      .catch((err) => {
        console.log('err', err)
      })
  } catch (err) {
    console.log('err', err)
    res.status(500).send(err)
  }
})

router.delete('/team/:teamId', async (req, res, next) => {
  try {
    const { teamId } = req.params
    const targetCountry = await Team.findOne({ 'teams._id': teamId })
    console.log('targetCountry.teams', teamId)
    // eslint-disable-next-line eqeqeq
    const filterTeams = targetCountry.teams.filter((team) => team._id != teamId)
    console.log('filterTeams', filterTeams)
    targetCountry.teams = [...filterTeams]
    targetCountry
      .save()
      .then((updated) => res.send(updated))
      .catch((err) => {
        console.log('err', err)
      })
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})

router.get('/banner', async (req, res) => {
  try {
    const banners = await Banner.find({})
    res.send(banners)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.post('/banner', async (req, res) => {
  const newBanners = req.body
  try {
    const removeCount = await Banner.remove({})
    console.log('removeCount', removeCount)
    for (const banner of newBanners) {
      const newBanner = new Banner(banner)
      await newBanner.save()
      console.log('newBanner ====>', newBanner)
    }
    res.send('success')
  } catch (err) {}
})

router.post('/upload', upload.single('icon'), async (req, res) => {
  if (!req.file) {
    res.status(500).send('error')
  } else {
    const host = req.headers.host
    const filePath = req.protocol + '://' + host + '/' + req.file.path
    console.log('filePath', filePath)
    res.send(filePath)
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email, password })
  if (!user) {
    res.status(401).send('Incorrect Credentials')
  }

  const userData = {
    email: user.email,
  }
  const jwtToken = jwt.sign(userData, '123456', {
    expiresIn: '24h',
  })
  // console.log('jwtToken', jwtToken)
  res.send(jwtToken)
})

module.exports = router
