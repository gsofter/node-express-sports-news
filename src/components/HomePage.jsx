/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { makeStyles, Container } from '@material-ui/core'
import Articles from './Articles'
import PageTitle from './PageTitle'
import Scroll from 'react-scroll'
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

  article: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    borderBottom: '1px solid rgba(0, 0, 0, .1)',
  },
}))
const HomePage = ({ articles, loading, fail, language }) => {
  const classes = useStyles()
  const onReadMore = () => {
    scroll.scrollToBottom()
  }
  if (loading) return <h1> Loading... </h1>
  else if (fail) return <h1> Request Error </h1>
  return (
    <Container className={classes.root}>
      <PageTitle variant="h1"> {language.intro_title} </PageTitle>
      <PageTitle variant="body1">
        {language.intro_text}
        <a href="#" onClick={onReadMore}>
          Read More
        </a>
      </PageTitle>
      <Articles
        articles={articles}
        sponText={language.spon_text}
        sponLink={language.spon_link}
      />
      <PageTitle variant="body1">{language.footer_text}</PageTitle>
    </Container>
  )
}

export default HomePage
