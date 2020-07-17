import React from 'react'
import {
  Drawer,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
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

    '& #nested-list-subheader': {
      color: 'white',
    },
  },
  nested: {
    color: '#a5a5a5',
  },
}))

const MenuItemIcon = withStyles({
  root: {
    color: 'white',
  },
})(ListItemIcon)

const MenuHeader = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
})(ListSubheader)

const MenuItem = withStyles({
  root: {
    color: 'white',
    fontWeight: '700',
  },
})(ListItem)

const MenuSubItem = withStyles({
  root: {
    color: '#a5a5a5',
  },
})(ListItem)

const MenuItemDivider = withStyles({
  root: { color: '#a5a5a5' },
})(Divider)

const CountryItem = ({
  country,
  handleClickCountry,
  handleClickTeam,
  handleClickLanguage,
}) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
  const handleClick = (e) => {
    e.stopPropagation()
    setOpen(!open)
  }

  return (
    <>
      <MenuItem
        button
        onClick={(e) => {
          handleClickCountry(country.country)
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
                key={team.team_name}
                onClick={(e) => handleClickTeam(team.team_name)}
              >
                <ListItemText>{team.team_name}</ListItemText>
              </MenuSubItem>
            )
          })}
        </List>
      </Collapse>
    </>
  )
}

const LanguageItem = ({ language, handleClickLanguage }) => {
  const classes = useStyles()
  return (
    <MenuSubItem
      button
      className={classes.nested}
      onClick={handleClickLanguage}
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
          <MenuItemDivider />
          <ListItem>
            <ListItemText> Language: </ListItemText>
          </ListItem>
          {languages.map((language) => (
            <LanguageItem
              handleClick={handleClickLanguage}
              language={language}
            />
          ))}
        </List>
      </div>
    </Drawer>
  )
}

export default Sidebar
