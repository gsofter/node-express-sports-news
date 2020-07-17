import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import path from 'path'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#77c38b',
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

const HeaderAppBar = withStyles({
  root: {
    backgroundColor: '#77c38b',
  },
})(AppBar)

const LogoIconButton = withStyles({
  root: {
    borderRadius: '0px',
  },
})(IconButton)

export default function Header({ openMenu, openSearch, handleLogoClick }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <HeaderAppBar position="static">
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
            <LogoIconButton edge="end" onClick={handleLogoClick}>
              <img
                src={path.resolve(__dirname, 'ft-logo.png')}
                alt="fantalk-logo"
              />
            </LogoIconButton>
          </div>
          <IconButton
            edge="start"
            className={classes.searchButton}
            color="inherit"
            aria-label="open drawer"
            onClick={openSearch}
          >
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </HeaderAppBar>
    </div>
  )
}
