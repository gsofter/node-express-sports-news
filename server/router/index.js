const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/feed')
require('../models/team')
const Team = mongoose.model('team')

router.get('/test', async (req, res, next) => {
  res.send('testing')
})

router.get('/api/teams', async (req, res, next) => {
  const teams = await Team.find({})
  console.log('/api/teams')
  res.send(teams)
})
module.exports = router
