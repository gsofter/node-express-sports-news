const mongoose = require('mongoose')

const Schema = mongoose.Schema

const LanguageSchema = new Schema({
  code: { type: String, unique: true, require: true },
  name: { type: String, unique: true, require: true },
})

mongoose.model('language', LanguageSchema)
