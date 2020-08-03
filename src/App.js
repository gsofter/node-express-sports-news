import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import FantalkTheme from './config/theme'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Reducer from './redux/reducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { SnackbarProvider } from 'notistack'
import { Helmet } from 'react-helmet'

import Header from './containers/Header'
import Footer from './containers/Footer'
import Sidebar from './containers/Sidebar'
import Searchbar from './containers/Searchbar'
import Homepage from './pages/HomePage'
import { useDispatch } from 'react-redux'
import { loadTeams, loadLanguages, loadBanners } from './redux/actions'
import CountryPage from './pages/CountryPage'
import TeamPage from './pages/TeamPage'
import AboutusPage from './components/AboutusPage'
import SearchPage from './pages/SearchPage'
import AdminPage from './pages/admin'

const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)))

const GeneralComponents = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isOpenSearch, setIsOpenSearch] = useState(false)
  const toggleMenu = (isOpen) => {
    setIsOpenMenu(isOpen)
  }
  const toggleSearch = (isOpen) => {
    setIsOpenSearch(isOpen)
  }
  return (
    <>
      <Header toggleMenu={toggleMenu} toggleSearch={toggleSearch} />
      <Sidebar toggleMenu={toggleMenu} isOpen={isOpenMenu} />
      <Searchbar toggleSearch={toggleSearch} isOpen={isOpenSearch} />
    </>
  )
}

const MainApp = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadTeams())
    dispatch(loadLanguages())
    dispatch(loadBanners())
  }, [dispatch])
  return (
    <>
      <Helmet>
        <title>Fantalk </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Fantalk" />
        <meta
          name="description"
          content="Fantalk | World Wide Sports News | Breaking Sports News"
        />
      </Helmet>
      <FantalkTheme>
        <SnackbarProvider>
          <Switch>
            <Route path="/admin">
              <AdminPage />
            </Route>
            <Route path="/:language/country/:countryName">
              <GeneralComponents />
              <CountryPage />
              <Footer />
            </Route>
            <Route path="/:language/team/:teamName">
              <GeneralComponents />
              <TeamPage />
              <Footer />
            </Route>
            <Route path="/:language/search/:searchText">
              <GeneralComponents />
              <SearchPage />
              <Footer />
            </Route>
            <Route path="/:language/aboutus/">
              <GeneralComponents />
              <AboutusPage />
              <Footer />
            </Route>
            <Route path="/:language/">
              <GeneralComponents />
              <Homepage />
              <Footer />
            </Route>
            <Route path="*">
              <Redirect to="/en" />
            </Route>
          </Switch>
        </SnackbarProvider>
      </FantalkTheme>
    </>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
}
