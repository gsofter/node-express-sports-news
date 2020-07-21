const mongoose = require('mongoose')
const { compose: feedUrls } = require('./feedUrls')
require('../models/language')
require('../models/team')
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

const languages = [
  {
    code: 'en',
    name: 'English',
  },
  {
    code: 'it',
    name: 'Italy',
  },
]

const feedTeams = async () => {
  for (const item of teams) {
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
}

const feedLanguages = async () => {
  for (const item of languages) {
    const newLanguage = await Language.findOneAndUpdate(
      {
        code: item.code,
      },
      {
        name: item.name,
      },
      {
        new: true,
        upsert: true,
        useFindAndModify: true,
      },
    )
    console.log('newLanguage ====>', newLanguage)
  }
}

function connect() {
  mongoose.connection
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', function () {
      console.log('MONGO connected')
      feedTeams()
      feedLanguages()
      feedUrls()
      //Promise.all([feedTeams, feedLanguages]).then(process.exit)
    })
  return mongoose.connect('mongodb://localhost:27017/fantalk', {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

connect()
