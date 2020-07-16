const express = require('express')
const router = express.Router()

router.get('/test', async (req, res, next) => {
  const feeds = await Feed.find({})
  res.send(feeds)
})

module.exports = router
