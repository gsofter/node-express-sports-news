import React from 'react'
import { makeStyles, Container, Typography } from '@material-ui/core'
import moment from 'moment'
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(1),
    },

    '& h1,h2,h3,h4,h5,h6': {
      color: 'black',
      fontStyle: 'bold',
      fontWeight: '700',
    },
    '& p': {
      color: '#a5a5a5',
    },
  },

  page: {
    paddingBottom: theme.spacing(3),
    borderBottom: '1px solid rgba(0, 0, 0, .1)',
  },

  article: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    borderBottom: '1px solid rgba(0, 0, 0, .1)',
  },
}))
const HomePage = ({ articles, loading, fail }) => {
  const classes = useStyles()
  if (loading) return <h1> Loading... </h1>
  else if (fail) return <h1> Request Error </h1>
  return (
    <Container className={classes.root}>
      <div className={classes.page}>
        <Typography variant="h4"> FOOTBALL NEWS </Typography>
        <Typography variant="body1">
          Welcome Team Page
          <a href="#"> Read More </a>
        </Typography>
      </div>
      {articles.map((article) => {
        return (
          <div className={classes.article}>
            <Typography variant="h5">{article.title}</Typography>
            <Typography variant="body1">
              {moment(article.pub_date).fromNow()} - {article.feed}
            </Typography>
          </div>
        )
      })}
    </Container>
  )
}

export default HomePage
