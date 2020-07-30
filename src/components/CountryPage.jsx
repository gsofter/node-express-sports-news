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
const CountryPage = ({ country, articles, loading, banners }) => {
  const classes = useStyles()
  if (loading) return <h1> Loading... </h1>
  return (
    <Container className={classes.root}>
      <div className={classes.page}>
        <PageTitle variant="h1"> {country.country} FOOTBALL NEWS </PageTitle>
        <PageTitle variant="body1">
          {country.intro_text}
          <a href="#"> Read More </a>
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
  )
}

export default CountryPage
