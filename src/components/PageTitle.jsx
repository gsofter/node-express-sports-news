import React from 'react'
import { Typography, withStyles } from '@material-ui/core'
const PageTitle = withStyles({
  h1: {
    fontSize: '30px',
    fontWeight: '700',
  },
  body1: {
    fontStyle: 'italic',
    color: '#a5a5a5',
    marginTop: '10px',
  },
})(Typography)

export default PageTitle
