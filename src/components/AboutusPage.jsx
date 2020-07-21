import React from 'react'
import PageTitle from './PageTitle'
import { Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),

    '& p': {
      fontStyle: 'italic',
      color: '#a5a5a5',
    },
  },
}))

const AboutusPage = () => {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <PageTitle variant="h1">ABOUT US</PageTitle>
      <p>
        We've created a sample About Us template designed to work well for
        virtually any online store, blog, or website. Just fill in the brackets
        with your company's information and you'll have a professional About Us
        page written in minutes. If you want to put a personal touch on your
        page (which we highly recommend), check out the About Us examples below
        the template.
      </p>
    </Container>
  )
}

export default AboutusPage
