const mongoose = require('mongoose')

const Schema = mongoose.Schema

const LanguageSchema = new Schema({
  code: String,
  name: String,
})

mongoose.model('language', LanguageSchema)
