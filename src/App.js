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
import useInit from './hooks/useInit'
import Header from './containers/Header'
import Footer from './containers/Footer'
import Sidebar from './containers/Sidebar'
import Searchbar from './containers/Searchbar'
import Homepage from './pages/HomePage'
import CountryPage from './pages/CountryPage'
import TeamPage from './pages/TeamPage'
import AboutusPage from './components/AboutusPage'
import SearchPage from './pages/SearchPage'
import AdminPage from './pages/admin'
import LoginPage from './pages/LoginPage'

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
  useInit()
  return (
    <>
      <Helmet>
        <title>Fantalk </title>
        <meta name="title" content="Fantalk" data-react-helmet="true" />
        <meta
          name="description"
          content="Breaking Sports News"
          data-react-helmet="true"
        />
      </Helmet>
      <FantalkTheme>
        <SnackbarProvider>
          <Switch>
            <Route path="/admin">
              <AdminPage />
            </Route>
            <Route path="/login">
              <LoginPage />
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
