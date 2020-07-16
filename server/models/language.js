const mongoose = require('mongoose')

const Schema = mongoose.Schema

const LanguageSchema = new Schema({
  language: { type: String, default: 'en', maxlength: 400 },
})

mongoose.model('language', LanguageSchema)
