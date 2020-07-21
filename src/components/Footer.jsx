/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    '& a': {
      color: 'black',
      fontSize: '16pt',
    },
    '& ul': {
      listStyle: 'none',
      marginLeft: '-40px',
    },
    '& ul>li': {
      paddingTop: theme.spacing(1),
    },
  },
  container: {
    [theme.breakpoints.up('md')]: {
      width: '768px',
    },
  },
}))
const Footer = ({ onClickAboutUs }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <ul>
          <li>
            <a href="#" onClick={onClickAboutUs}>
              About us
            </a>
          </li>
          <li>
            <a href="#"> Contact </a>
          </li>
          <li>
            <a href="#"> Privacy </a>
          </li>
          <li>
            <a href="#"> Terms of Service</a>
          </li>
          <li>
            <a href="#"> Follow us on Twitter </a>
          </li>
        </ul>
      </Container>
    </div>
  )
}

export default Footer
