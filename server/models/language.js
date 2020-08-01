const mongoose = require('mongoose')

const Schema = mongoose.Schema

const LanguageSchema = new Schema({
  code: { type: String, unique: true, require: true },
  name: { type: String, unique: true, require: true },
  intro_title: String,
  meta_title: String,
  meta_Description: String,
  intro_text: String,
  footer_text: String,
  spon_text: String,
  spon_link: String,
})

mongoose.model('language', LanguageSchema)
