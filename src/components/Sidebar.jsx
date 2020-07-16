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

import InboxIcon from '@material-ui/icons/MoveToInbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import SendIcon from '@material-ui/icons/Send'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import StarBorder from '@material-ui/icons/StarBorder'
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
    fontStyle: 'bold',
  },
})(ListItem)

const MenuSubItem = withStyles({
  root: {
    color: '#a5a5a5',
    fontStyle: 'regular',
  },
})(ListItem)

const Sidebar = ({ isOpen, closeMenu }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }
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
          <MenuItem button onClick={handleClick}>
            <ListItemText primary="Inbox" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </MenuItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <MenuSubItem button className={classes.nested}>
                <ListItemText primary="Starred" />
              </MenuSubItem>
            </List>
          </Collapse>
        </List>
      </div>
    </Drawer>
  )
}

export default Sidebar
