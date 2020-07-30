const mongoose = require('mongoose')
const { compose: feedUrls } = require('./feedUrls')
require('../models/language')
require('../models/team')
require('../models/banner')
const Team = mongoose.model('team')
const Language = mongoose.model('language')
const Banner = mongoose.model('banner')

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

const banners = [
  {
    mobile: `<div id="320441640">
    <script type="text/javascript">
        try {
            window._mNHandle.queue.push(function (){
                window._mNDetails.loadTag("320441640", "300x250", "320441640");
            });
        }
        catch (error) {}
    </script>
</div>`,
    desktop: `<div id="320441640">
    <script type="text/javascript">
        try {
            window._mNHandle.queue.push(function (){
                window._mNDetails.loadTag("320441640", "300x250", "320441640");
            });
        }
        catch (error) {}
    </script>
</div>`,
  },
  {
    mobile: `<div id="320441640">
    <script type="text/javascript">
        try {
            window._mNHandle.queue.push(function (){
                window._mNDetails.loadTag("320441640", "300x250", "320441640");
            });
        }
        catch (error) {}
    </script>
</div>`,
    desktop: `<div id="320441640">
    <script type="text/javascript">
        try {
            window._mNHandle.queue.push(function (){
                window._mNDetails.loadTag("320441640", "300x250", "320441640");
            });
        }
        catch (error) {}
    </script>
</div>`,
  },
  {
    mobile: `<div id="320441640">
    <script type="text/javascript">
        try {
            window._mNHandle.queue.push(function (){
                window._mNDetails.loadTag("320441640", "300x250", "320441640");
            });
        }
        catch (error) {}
    </script>
</div>`,
    desktop: `<div id="320441640">
    <script type="text/javascript">
        try {
            window._mNHandle.queue.push(function (){
                window._mNDetails.loadTag("320441640", "300x250", "320441640");
            });
        }
        catch (error) {}
    </script>
</div>`,
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

const feedBanner = async () => {
  const removeCount = await Banner.remove({})
  console.log('removeCount', removeCount)
  for (const banner of banners) {
    const newBanner = new Banner(banner)
    await newBanner.save()
    console.log('newBanner ====>', newBanner)
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
      feedBanner()
      //Promise.all([feedTeams, feedLanguages]).then(process.exit)
    })
  return mongoose.connect('mongodb://localhost:27017/fantalk', {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

connect()
