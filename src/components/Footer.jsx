/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#77c38b',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    '& a': {
      color: 'black',
    },
    '& ul': {
      listStyle: 'none',
      marginLeft: theme.spacing(-3),
    },
    '& ul>li': {
      paddingTop: theme.spacing(1),
    },
  },
  container: {},
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
