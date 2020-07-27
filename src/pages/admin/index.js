import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import TeamFeed from './containers/TeamFeed'
import LangFeed from './containers/LangFeed'
import Language from './containers/Language'
import Country from './containers/Country'
import Team from './containers/Team'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
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

export default function Dashboard() {
  const classes = useStyles()
  const match = useRouteMatch()
  const [open, setOpen] = React.useState(true)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header handleDrawerOpen={handleDrawerOpen} open={open} />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Switch>
              <Route path={`${match.path}/feeds/team`}>
                <TeamFeed />
              </Route>
              <Route path={`${match.path}/feeds/lang`}>
                <LangFeed />
              </Route>
              <Route path={`${match.path}/languages`}>
                <Language />
              </Route>
              <Route path={`${match.path}/countries`}>
                <Country />
              </Route>
              <Route path={`${match.path}/teams`}>
                <Team />
              </Route>
            </Switch>
          </Grid>
        </Container>
      </main>
    </div>
  )
}
