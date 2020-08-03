/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
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

    '& h1,h2,h3,h4,h5,h6': {
      color: 'black',
      fontStyle: 'bold',
      fontWeight: '700',
    },
    '& p': {
      color: '#a5a5a5',
    },
    '& a': {
      textDecoration: 'none',
      color: 'black',
    },
  },

  page: {},
  teamHeader: {},

  article: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    borderBottom: '1px solid rgba(0, 0, 0, .1)',
  },
}))
const TeamPage = ({ team, articles, loading, fail }) => {
  const classes = useStyles()
  const onReadMore = () => {
    scroll.scrollToBottom()
  }
  console.log('team', team)
  if (loading) return <h1> Loading... </h1>
  else if (fail) return <h1> Request Error </h1>
  return (
    <>
      <Container className={classes.root}>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="title"
            content={team.meta_title}
            data-react-helmet="true"
          />
          <meta
            name="description"
            content={team.meta_description}
            data-react-helmet="true"
          />
        </Helmet>
        <div className={classes.page}>
          {team.icon ? (
            <img src={team.icon} alt="team icon" width="50px" height="42px" />
          ) : null}
          <PageTitle variant="h1"> {team.name} FOOTBALL NEWS </PageTitle>
          <PageTitle variant="body1">
            {team.intro_text}
            <a href="#" onClick={onReadMore}>
              Read More
            </a>
          </PageTitle>
        </div>
        <Articles articles={articles} sponText={team.spon_text} />
        sponLink={team.spon_link}
        <PageTitle variant="body1">{team.footer_text}</PageTitle>
      </Container>
    </>
  )
}

export default TeamPage
