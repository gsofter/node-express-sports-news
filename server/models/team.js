const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TeamSchema = new Schema({
  language: { type: String, default: 'en', maxlength: 400 },
  country: { type: String, default: 'en', maxlength: 400 },
  team_name: { type: String, default: '', maxlength: 400 },
  icon: { type: String },
  meta_title: { type: String },
  meta_description: { type: String },
  intro_text: { type: String },
  footer_text: { type: String },
  ad_text: { type: String },
})

mongoose.model('team', TeamSchema)
