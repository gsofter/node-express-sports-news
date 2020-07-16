import React from 'react'
import { Container, Typography } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core'

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

const Home = () => {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <div className={classes.page}>
        <Typography variant="h4"> FOOTBALL NEWS </Typography>
        <Typography variant="body1">
          Recently Ozil claimed that he is prepared for the next match which
          against the Liverpool FC. Neymar JR is missing the life in Barcelona
          and especially Messi was not only partner but he was really good
          friend
          <a href="#"> Read More </a>
        </Typography>
      </div>
      <div className={classes.article}>
        <Typography variant="h5">
          'It's life or death' - FIFA medical cheif D'Hooghe says football
          shouldn't return until after summer.
        </Typography>
        <Typography variant="body1"> 32 mins ago - The Telegraph </Typography>
      </div>
    </Container>
  )
}

export default Home
