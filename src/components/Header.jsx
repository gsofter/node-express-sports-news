import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  searchButton: {
    justifyContent: 'flex-end',
  },

  logo: {
    flexGrow: 1,
    textAlign: 'center',
    '& img': {
      maxHeight: theme.spacing(5),
    },
    [theme.breakpoints.down('sm')]: {
      '& img': {
        maxHeight: theme.spacing(3),
      },
    },
  },
}))

export default function Header({ openMenu }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={openMenu}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.logo} variant="h6" noWrap>
            <img src="ft-logo.png" alt="fantalk-logo" />
          </div>
          <IconButton
            edge="start"
            className={classes.searchButton}
            color="inherit"
            aria-label="open drawer"
          >
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
