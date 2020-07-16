import React from 'react'
import { Drawer, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#07081f',
    width: theme.sidebarWidth,
    color: 'white',
    height: 'inherit',
    [theme.breakpoints.down('sm')]: {
      width: theme.mobileSidebarWidth,
    },

    '& #nested-list-subheader': {
      color: 'white',
    },
  },
  nested: {
    color: '#a5a5a5',
  },
}))

const Searchbar = ({ isOpen, closeSearch }) => {
  const classes = useStyles()
  return (
    <Drawer anchor="right" open={isOpen} onClose={closeSearch}>
      <div className={classes.root}>asdfasdfasdf</div>
    </Drawer>
  )
}

export default Searchbar
