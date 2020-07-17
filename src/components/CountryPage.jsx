import React from 'react'
import { useParams } from 'react-router-dom'
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
const CountryPage = ({ country, articles, loading }) => {
  let { countryName } = useParams()
  const classes = useStyles()
  if (loading) return <h1> Loading... </h1>
  console.log(articles)
  return (
    <Container className={classes.root}>
      <div className={classes.page}>
        <Typography variant="h4"> {countryName} FOOTBALL NEWS </Typography>
        <Typography variant="body1">
          Recently Ozil claimed that he is prepared for the next match which
          against the Liverpool FC. Neymar JR is missing the life in Barcelona
          and especially Messi was not only partner but he was really good
          friend
          <a href="#"> Read More </a>
        </Typography>
      </div>
      {articles.map((article) => {
        return (
          <div className={classes.article}>
            <Typography variant="h5">{article.title}</Typography>
            <Typography variant="body1">
              {moment(article.pub_date).fromNow()}
            </Typography>
          </div>
        )
      })}
    </Container>
  )
}

export default CountryPage
