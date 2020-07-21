import React from 'react'
import PageTitle from './PageTitle'
import { Container, makeStyles } from '@material-ui/core'
import Articles from './Articles'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      width: '768px',
    },
  },
}))

const SearchPage = ({ searchText, articles }) => {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <PageTitle variant="h1">SEARCH RESULTS</PageTitle>
      <PageTitle variant="body1">{searchText}</PageTitle>
      <Articles articles={articles} />
    </Container>
  )
}

export default SearchPage
