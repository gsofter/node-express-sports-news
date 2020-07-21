import React from 'react'
import {
  Drawer,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core'

import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#07081f',
    width: theme.sidebarWidth,
    color: 'white',
    height: 'inherit',
    [theme.breakpoints.down('sm')]: {
      width: theme.mobileSidebarWidth,
    },

    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    '& #nested-list-subheader': {
      color: 'white',
    },
    '& .countryMenu': {
      borderTop: '1px solid #373960',
    },
  },
  nested: {
    color: '#a5a5a5',
  },

  language: {
    borderTop: '1px solid #373960',
  },
}))

const MenuItemIcon = withStyles({
  root: {
    color: 'white',
    minWidth: '35px',
  },
})(ListItemIcon)

const MenuHeader = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: '12pt',
  },
})(ListSubheader)

const MenuItem = withStyles({
  root: {
    color: 'white',
    fontWeight: '700',
    fontSize: '16pt',
  },
})(ListItem)

const MenuSubItem = withStyles({
  root: {
    color: '#a5a5a5',
    fontSize: '14pt',
  },
})(ListItem)

const CountryItem = ({ country, handleClickCountry, handleClickTeam }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
  const handleClick = (e) => {
    e.stopPropagation()
    setOpen(!open)
  }

  return (
    <div className="countryMenu">
      <MenuItem
        button
        onClick={(e) => {
          handleClickCountry({
            country: country.country,
            language: country.language,
          })
        }}
      >
        <ListItemText>{country.country}</ListItemText>
        {open ? (
          <ExpandLess onClick={handleClick} />
        ) : (
          <ExpandMore onClick={handleClick} />
        )}
      </MenuItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {country.teams.map((team) => {
            return (
              <MenuSubItem
                button
                className={classes.nested}
                key={team.name}
                onClick={(e) =>
                  handleClickTeam({
                    team: team,
                    language: country.language,
                  })
                }
              >
                <ListItemText>{team.name}</ListItemText>
              </MenuSubItem>
            )
          })}
        </List>
      </Collapse>
    </div>
  )
}

const LanguageItem = ({ language, handleClickLanguage }) => {
  const classes = useStyles()
  return (
    <MenuSubItem
      button
      className={classes.nested}
      onClick={(e) => handleClickLanguage(language.code)}
    >
      <ListItemText>{language.name}</ListItemText>
    </MenuSubItem>
  )
}

const Sidebar = ({
  isOpen,
  closeMenu,
  teams,
  languages,
  handleClickCountry,
  handleClickTeam,
  handleClickLanguage,
}) => {
  const classes = useStyles()

  return (
    <Drawer anchor="left" open={isOpen} onClose={closeMenu}>
      <div className={classes.root}>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <MenuHeader
              component="div"
              id="nested-list-subheader"
              color="primary"
            >
              <MenuItemIcon>
                <MenuIcon />
              </MenuItemIcon>
              MENU
            </MenuHeader>
          }
        >
          {teams.map((country) => (
            <CountryItem
              country={country}
              key={country}
              handleClickCountry={handleClickCountry}
              handleClickTeam={handleClickTeam}
            />
          ))}
          <div className={classes.language}>
            <ListItem>
              <ListItemText> Language: </ListItemText>
            </ListItem>
            {languages.map((language) => (
              <LanguageItem
                handleClickLanguage={handleClickLanguage}
                language={language}
              />
            ))}
          </div>
        </List>
      </div>
    </Drawer>
  )
}

export default Sidebar
