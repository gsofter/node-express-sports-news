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
const CountryPage = ({ country, articles, loading }) => {
  const classes = useStyles()
  if (loading) return <h1> Loading... </h1>
  return (
    <Container className={classes.root}>
      <div className={classes.page}>
        <PageTitle variant="h1"> {country} FOOTBALL NEWS </PageTitle>
        <PageTitle variant="body1">
          Recently Ozil claimed that he is prepared for the next match which
          against the Liverpool FC. Neymar JR is missing the life in Barcelona
          and especially Messi was not only partner but he was really good
          friend
          <a href="#"> Read More </a>
        </PageTitle>
        <Articles articles={articles} />
      </div>
    </Container>
  )
}

export default CountryPage
