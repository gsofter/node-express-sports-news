const mongoose = require('mongoose')
require('../models/article')
const Article = mongoose.model('article')
const moment = require('moment')
/**
 * Tip
 * ====
 * - Set `user-agent` and `accept` headers when sending requests. Some services will not respond as expected without them.
 */

var fetch = require('node-fetch')
var FeedParser = require('feedparser')
var iconv = require('iconv-lite')

function parse(feedEndpoint, language = 'en', country = '', team = '') {
  // Get a response stream
  fetch(feedEndpoint, {
    'user-agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36',
    accept: 'text/html,application/xhtml+xml',
  })
    .then(function (res) {
      // Setup feedparser stream
      var feedparser = new FeedParser()
      feedparser.on('error', (e) => done(e, feedEndpoint))
      feedparser.on('end', () => done(null, feedEndpoint))
      feedparser.on('readable', async function () {
        var post
        while ((post = this.read())) {
          const filter = { guid: post.guid }
          const update = {
            title: post.title,
            author: post.author,
            guid: post.guid,
            pub_date: moment(post.pubDate),
            language: language,
            country: country,
            team: team,
          }
          const newArticle = await Article.findOneAndUpdate(filter, update, {
            new: true,
            upsert: true,
            useFindAndModify: true,
          })
          //   console.log(`${team} ===>`, newArticle)
        }
      })

      // Handle our response and pipe it to feedparser
      if (res.status !== 200) throw new Error('Bad status code')
      var charset = getParams(res.headers.get('content-type') || '').charset
      var responseStream = res.body
      responseStream = maybeTranslate(responseStream, charset)
      // And boom goes the dynamite
      responseStream.pipe(feedparser)
    })
    .catch((e) => done(e, feedEndpoint))
}

function maybeTranslate(res, charset) {
  var iconvStream
  // Decode using iconv-lite if its not utf8 already.
  if (!iconvStream && charset && !/utf-*8/i.test(charset)) {
    try {
      iconvStream = iconv.decodeStream(charset)
      console.log('Converting from charset %s to utf-8', charset)
      iconvStream.on('error', done)
      // If we're using iconvStream, stream will be the output of iconvStream
      // otherwise it will remain the output of request
      res = res.pipe(iconvStream)
    } catch (err) {
      res.emit('error', err)
    }
  }
  return res
}

function getParams(str) {
  var params = str.split(';').reduce(function (params, param) {
    var parts = param.split('=').map(function (part) {
      return part.trim()
    })
    if (parts.length === 2) {
      params[parts[0]] = parts[1]
    }
    return params
  }, {})
  return params
}

function done(err, feedEndpoint = '') {
  if (err) {
    console.log(err, err.stack)
    console.log('ERROR ====>', feedEndpoint)
  }
  console.log('SUCCESS ====>', feedEndpoint)
}

module.exports = {
  parse,
}
