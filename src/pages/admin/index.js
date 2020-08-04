import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'
import TeamFeed from './containers/TeamFeed'
import LangFeed from './containers/LangFeed'
import Language from './containers/Language'
import Country from './containers/Country'
import Team from './containers/Team'
import Banner from './containers/Banner'
import { useSelector, useDispatch } from 'react-redux'
import { loginFailed } from '../../redux/actions'
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

const PrivateRoute = ({ children, ...rest }) => {
  const admin_token = useSelector((state) => state.admin_token)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        admin_token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default function Dashboard() {
  const classes = useStyles()
  const match = useRouteMatch()
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(true)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleLogout = () => {
    dispatch(loginFailed())
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        handleLogout={handleLogout}
      />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Switch>
              <PrivateRoute path={`${match.path}/feeds/team`}>
                <TeamFeed />
              </PrivateRoute>
              <PrivateRoute path={`${match.path}/feeds/lang`}>
                <LangFeed />
              </PrivateRoute>
              <PrivateRoute path={`${match.path}/languages`}>
                <Language />
              </PrivateRoute>
              <PrivateRoute path={`${match.path}/countries`}>
                <Country />
              </PrivateRoute>
              <PrivateRoute path={`${match.path}/teams`}>
                <Team />
              </PrivateRoute>
              <PrivateRoute path={`${match.path}/banner`}>
                <Banner />
              </PrivateRoute>
              <Route path="*">
                <Redirect to="/admin/feeds/team" />
              </Route>
            </Switch>
          </Grid>
        </Container>
      </main>
    </div>
  )
}
