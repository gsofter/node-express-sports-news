const mongoose = require('mongoose')

const Schema = mongoose.Schema

const FeedSchema = new Schema({
  name: { type: String, default: '', maxlength: 400 },
  url: { type: String, default: '', maxlength: 400 },
  language: { type: String, default: 'en', maxlength: 400 },
  country: { type: String, default: 'en', maxlength: 400 },
  scope: { type: String },
  createdAt: { type: Date, default: Date.now },
})

FeedSchema.path('name').required(true, 'Feed name cannot be blank')
FeedSchema.path('url').required(true, 'Feed url cannot be blank')

mongoose.model('feed', FeedSchema)
