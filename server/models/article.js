const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ArticleSchema = new Schema({
  title: { type: String },
  link: { type: String },
  author: { type: String },
  description: { type: String },
  pub_date: { type: Date },
  thumbnail: { type: String },
  country: { type: String },
  language: { type: String },
  team: { type: String },
  feed: { type: String },
  guid: { type: String },
  scope: { type: String, enum: ['team', 'lang'], default: 'team' },
})

mongoose.model('article', ArticleSchema)
