# Node feed parser

Analyzes sports feeds from multiple endpoints and saves them to mongoDB

### How to install

```sh
npm run install
```

### feed-parser

To learn more about feed-parser, visit [here](https://github.com/danmactough/node-feedparser)

# multi-lingual RSS aggregator (python)

Web Development Posted Jun 30, 2020
Fantalks is a multi-lingual football news aggregator which should be able to handle thousands of RSS feeds. We assume Python's feed parser (https://pypi.org/project/feedparser/) will be used for this but are open to other suggestions if there are better solutions?

## BACKEND

It's important to understand the database structure, these are the main parts:

- language: default is English but for non-British teams there will also be pages in their own language (e.g. Italian feeds & content for AC Milan) in addition to English
- country: the country in which a team plays (e.g. Italy for AC Milan)
- team: the team page on which the feeds for that team are shown (e.g. AC Milan)

In terms of domain set up that would be:
https://it.fantalks.com/italy/ac-milan

So there should be a subdomain for each language and then a clean folder structure in the URL.

News for the teams will be pulled from the feeds in two different ways

1. some feeds will be 'language-wide' feeds, from these feeds headlines will be pulled in based on keywords, e.g. a keyword could be 'ac milan'

2. some feeds will be team specific feeds, all headlines from these feeds should be displayed on the team page

So when adding feeds in the CMS there should be these fields:

- Feed name
- Feed URL
- Language
- Country
- assign team option -> if left blank, it's a language-wide feed

When adding a team in the CMS there should be these fields:

- Team name
- Language
- Country
- Team icon (a shirt image that will be displayed on the team page)
- meta title
- meta description
- intro text
- footer text
- sponsored ad text + link

For the homepage for each language and the country pages there should also be these fields:

- title
- meta title
- meta description
- intro text
- footer text

Should be able to translate these words for each language:

- Menu
- Search
- Read more
- Load more
- ago
  See PSD files where these appear.

All feeds should be updated every 5 minutes.

## FRONT END

The front end is simple and has the following pages:

- homepage
- country page (not in PSD files, but exactly the same as the homepage)
- team page
- static page (about us, privacy, terms)

The desktop version is the same as tablet, only the top nav should go full width. Please look at the mobile PSD files first, it's obvious how they then resize for bigger screens.

The homepage will display:

- Top nav, this should be sticky i.e. always visible as you scroll down the page
- Title
- Intro text with 'read more' link (read more is a javascript link to the footer text)
- All headlines for the selected language displayed in chronological order (newest at the top)
- Sponsored ad text + link
- 3 banner positions
- load more button to load the next 40 headlines
- footer text
- footer links

please note the headlines should be displayed as follows:

- 3 headlines
- sponsored ad text + link
- 7 headlines
- banner
- 10 headlines
- banner
- 10 headlines
- banner
- 10 headlines
- load more (show next 40 headlines, no banners or sponsored ad in between those)

### Country page:

- This page is identical to the homepage and should display all feeds for the selected country, e.g. all Italy feeds (AC Milan, Inter Milan, Juventus, etc.)

### Team page:

- Pretty much identical to the homepage, but only showing headlines related to the team (pulled in as explained above: via keyword or dedicated feeds)
- Team icon
- Link to language versions (if another language version is available)
- Rest is all the same as the homepage

So a team page could have, these two versions for instance:
Italian: https://it.fantalks.com/italy/ac-milan
English: https://fantalks.com/italy/ac-milan

### Static page:

- Title
- Text

H1 tags:

- Homepage: main title
- Country page: main title
- Team page: main title

H2 tags:

- Homepage: intro text
- Country page: intro text
- Team page: intro text

H3 tags:

- Homepage: headlines
- Country page: headlines
- Team page: headlines

Other things:

- Google Analytics tags need to be added
- Set up https using Lets Encrypt
- When sharing any link on social media it should show the attached image alongside the URL

Please provide a quote to complete this project and a timeline for how long you think it will take you to complete it
