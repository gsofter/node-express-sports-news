import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import RssFeedIcon from '@material-ui/icons/RssFeed'
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer'
import PublicIcon from '@material-ui/icons/Public'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import FlagIcon from '@material-ui/icons/Flag'
import RoomIcon from '@material-ui/icons/Room'
import NewReleasesIcon from '@material-ui/icons/NewReleases'
import { useSelector } from 'react-redux'
const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}))

const Sidebar = ({ open, handleDrawerClose }) => {
  const classes = useStyles()
  const teams = useSelector((state) => state.teams)
  const [expand, setExpand] = useState(false)
  const handleExpand = () => {
    setExpand(!expand)
  }
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button component={RouterLink} to="/admin/banner">
          <ListItemIcon>
            <NewReleasesIcon />
          </ListItemIcon>
          <ListItemText primary="Banner"></ListItemText>
        </ListItem>
        <ListItem button component={RouterLink} to="/admin/feeds/team">
          <ListItemIcon>
            <RssFeedIcon />
          </ListItemIcon>
          <ListItemText primary="Team Feeds"></ListItemText>
        </ListItem>
        <ListItem button component={RouterLink} to="/admin/feeds/lang">
          <ListItemIcon>
            <RssFeedIcon />
          </ListItemIcon>
          <ListItemText primary="Lang Feeds"></ListItemText>
        </ListItem>
        <ListItem button component={RouterLink} to="/admin/languages">
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText primary="Languages"></ListItemText>
        </ListItem>
        <ListItem button component={RouterLink} to="/admin/countries">
          <ListItemIcon>
            <RoomIcon />
          </ListItemIcon>
          <ListItemText primary="Countries"></ListItemText>
        </ListItem>
        <ListItem button onClick={handleExpand}>
          <ListItemIcon>
            <SportsSoccerIcon />
          </ListItemIcon>
          <ListItemText primary="Teams" />
          {expand ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={expand} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {teams.map((country) => {
              return (
                <ListItem
                  button
                  component={RouterLink}
                  to={`/admin/teams?country=${country.country}`}
                >
                  <ListItemIcon>
                    <FlagIcon />
                  </ListItemIcon>
                  <ListItemText primary={country.country} />
                </ListItem>
              )
            })}
          </List>
        </Collapse>
      </List>
      <Divider />
    </Drawer>
  )
}

export default Sidebar
