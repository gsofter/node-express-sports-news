const mongoose = require('mongoose')
const csv = require('csv-parser')
const fs = require('fs')
require('../models/feed')
require('../models/language')
require('../models/team')

const TeamFeed = mongoose.model('teamfeed')
const LangFeed = mongoose.model('langfeed')
const Language = mongoose.model('language')
const Team = mongoose.model('team')

const compose = () => {
  fs.createReadStream('server/team_feed.csv')
    .pipe(csv())
    .on('data', async (row) => {
      const filter = { feed_name: row['Feed name'] }
      const update = {
        team_name: row['Team'],
        country: row['Country'],
        language: row['Language'],
        feed_url: row['Feed URL'],
      }
      const newFeed = await TeamFeed.findOneAndUpdate(filter, update, {
        new: true,
        upsert: true,
        useFindAndModify: true,
      })

      await Team.findOneAndUpdate(
        {
          language: row['Language'],
          country: row['Country'],
          team_name: row['Team'],
        },
        {},
        {
          new: true,
          upsert: true,
          useFindAndModify: true,
        },
      )
    })
    .on('end', () => {
      console.log('CSV file successfully processed')
    })

  fs.createReadStream('server/lang_feed.csv')
    .pipe(csv())
    .on('data', async (row) => {
      const filter = { feed_name: row['Feed name'] }
      const update = {
        language: row['lang'],
        feed_url: row['Feed URL'],
      }
      const newFeed = await LangFeed.findOneAndUpdate(filter, update, {
        new: true,
        upsert: true,
        useFindAndModify: true,
      })

      console.log('New Lang Feed ===>', newFeed)
    })
    .on('end', () => {
      console.log('CSV file successfully processed')
    })
}

module.exports = { compose }
