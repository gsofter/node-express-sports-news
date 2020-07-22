const mongoose = require('mongoose')
const { parse } = require('./parser')
require('../models/feed')
const TeamFeed = mongoose.model('teamfeed')
const LangFeed = mongoose.model('langfeed')

connect()
function connect() {
  mongoose.connection
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', function () {
      console.log('MONGO connected')
      rssParse()
      setTimeout(finish, 1000 * 60 * 5)
    })
  return mongoose.connect('mongodb://127.0.0.1:27017/fantalk', {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

async function rssParse() {
  const teamfeeds = await TeamFeed.find({})
  teamfeeds.forEach((feed) => {
    parse(feed.feed_url, {
      language: feed.language,
      country: feed.country,
      team: feed.team_name,
      feed: feed.feed_name,
    })
  })
  const langfeeds = await LangFeed.find({})
  langfeeds.forEach((feed) => {
    parse(feed.feed_url, { language: feed.lang_name, feed: feed.feed_name })
  })
}

function finish() {
  process.exit(0)
}
