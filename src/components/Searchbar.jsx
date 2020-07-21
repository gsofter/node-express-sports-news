import React, { useState } from 'react'
import {
  Drawer,
  makeStyles,
  Typography,
  IconButton,
  Input,
  withStyles,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const ENTER_KEY_CODE = 13
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#07081f',
    width: theme.sidebarWidth,
    color: 'white',
    height: 'inherit',
    [theme.breakpoints.down('sm')]: {
      width: theme.mobileSidebarWidth,
    },
    padding: theme.spacing(1),
  },

  headRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  search: {
    color: 'white',
    padding: '15px 10px',
  },
}))

const SearchInput = withStyles({
  root: {
    color: 'white',
    backgroundColor: '#373960',
    width: '100%',
    '& .MuiInput-input': {
      padding: '15px 10px',
    },
  },
})(Input)
const Searchbar = ({ isOpen, closeSearch, onSearch }) => {
  const classes = useStyles()
  const [searchText, setSearchText] = useState('')
  const onChangeSearchText = (event) => {
    setSearchText(event.target.value)
  }
  const onEnter = (e) => {
    if (e.keyCode === ENTER_KEY_CODE) {
      onSearch(searchText)
    }
  }
  return (
    <Drawer anchor="right" open={isOpen} onClose={closeSearch}>
      <div className={classes.root}>
        <div className={classes.headRow}>
          <Typography variant="h5"> SEARCH </Typography>
          <IconButton
            edge="start"
            className={classes.searchButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => onSearch(searchText)}
          >
            <SearchIcon />
          </IconButton>
        </div>
        <SearchInput
          variant="filled"
          fullwidth
          disableUnderline
          color="white"
          onKeyDown={onEnter}
          value={searchText}
          onChange={onChangeSearchText}
        />
      </div>
    </Drawer>
  )
}

export default Searchbar
