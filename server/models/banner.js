const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BannerSchema = new Schema({
  mobile: String,
  desktop: String,
})

mongoose.model('banner', BannerSchema)
