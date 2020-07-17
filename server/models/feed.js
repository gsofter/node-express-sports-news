const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TeamFeedSchema = new Schema({
  team_name: String,
  country: String,
  language: String,
  feed_name: String,
  feed_url: String,
})

const LangFeedSchema = new Schema({
  language: String,
  feed_name: String,
  feed_url: String,
})

mongoose.model('teamfeed', TeamFeedSchema)
mongoose.model('langfeed', LangFeedSchema)
