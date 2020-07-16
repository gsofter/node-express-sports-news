const mongoose = require('mongoose')

const Schema = mongoose.Schema

ArticleSchema = new Schema({
  title: { type: String },
  link: { type: String },
  author: { type: String },
  description: { type: String },
  pub_date: { type: Date },
  thumbnail: { type: String },
  language: { type: String },
  team: { type: String },
  guid: { type: String },
  scope: { type: String, enum: ['team', 'lang'], default: 'team' },
})

const Article = mongoose.model('article', ArticleSchema)
module.exports = Article
