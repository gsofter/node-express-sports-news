const mongoose = require('mongoose')
require('../models/language')
require('../models/team')
const config = require('../../config')
const Team = mongoose.model('team')
const Language = mongoose.model('language')

const teams = [
  {
    country: 'England',
    language: 'en',
    teams: [
      {
        name: 'Liverpool',
        intro_text: 'Welcomem to our team',
        footer_text: 'Ummmmm',
        ad_text: 'This is adtext',
      },
    ],
  },
  {
    country: 'Italy',
    language: 'it',
    teams: [
      {
        name: 'AC Milan',
        intro_text: 'Welcomem to our country',
        footer_text: 'AC milan',
        ad_text: 'This is adtext',
      },
    ],
  },
]

const feed = () => {
  teams.forEach((item) => {
    console.log('item =>', item)
    const insert = async () => {
      const newTeam = await Team.findOneAndUpdate(
        { country: item.country },
        {
          language: item.language,
          teams: item.teams,
        },
        {
          new: true,
          upsert: true,
          useFindAndModify: true,
        },
      )
      console.log('newTeam ====>', newTeam)
    }
    insert()
  })
}

function connect() {
  mongoose.connection
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', function () {
      console.log('MONGO connected')
      feed()
    })
  return mongoose.connect('mongodb://localhost:27017/fantalk', {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

connect()
