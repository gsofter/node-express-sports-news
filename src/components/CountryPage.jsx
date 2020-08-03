/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react'
import { makeStyles, Container } from '@material-ui/core'
import Articles from './Articles'
import PageTitle from './PageTitle'
import Scroll from 'react-scroll'
import Helmet from 'react-helmet'

const scroll = Scroll.animateScroll
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(1),
    },
    [theme.breakpoints.up('md')]: {
      width: '768px',
    },
    '& a': {
      textDecoration: 'none',
      color: 'black',
    },
  },

  page: {
    paddingBottom: theme.spacing(3),
    borderBottom: '1px solid rgba(0, 0, 0, .1)',
  },
}))
const CountryPage = ({ country, articles, loading, banners }) => {
  const classes = useStyles()
  const onReadMore = () => {
    scroll.scrollToBottom()
  }
  if (loading) return <h1> Loading... </h1>
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content={country.meta_title || 'Fantalk'} />} />
        <meta
          name="description"
          content={
            country.meta_description ||
            'Fantalk | World Wide Sports News | Breaking Sports News'
          }
        />
      </Helmet>
      <Container className={classes.root}>
        <div className={classes.page}>
          <PageTitle variant="h1">{country.intro_title}</PageTitle>
          <PageTitle variant="body1">
            {country.intro_text}
            <a href="#" onClick={onReadMore}>
              Read More
            </a>
          </PageTitle>
          <Articles
            articles={articles}
            banners={banners}
            sponText={country.spon_text}
            sponLink={country.spon_link}
          />
          <PageTitle variant="body1">{country.footer_text}</PageTitle>
        </div>
      </Container>
    </>
  )
}

export default CountryPage
