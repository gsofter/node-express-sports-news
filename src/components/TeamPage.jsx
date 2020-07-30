/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { makeStyles, Container } from '@material-ui/core'
import Articles from './Articles'
import PageTitle from './PageTitle'
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
  if (loading) return <h1> Loading... </h1>
  else if (fail) return <h1> Request Error </h1>
  return (
    <Container className={classes.root}>
      <div className={classes.teamHeader}>{}</div>
      <div className={classes.page}>
        {team.icon ? (
          <img src={team.icon} alt="team icon" width="100px" height="100px" />
        ) : null}
        <PageTitle variant="h1"> {team.name} FOOTBALL NEWS </PageTitle>
        <PageTitle variant="body1">
          {team.intro_text}
          <a href="#"> Read More </a>
        </PageTitle>
      </div>
      <Articles
        articles={articles}
        sponText={team.spon_text}
        sponLink={team.spon_link}
      />
      <PageTitle variant="body1">{team.footer_text}</PageTitle>
    </Container>
  )
}

export default TeamPage
