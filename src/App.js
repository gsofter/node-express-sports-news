import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Header from './containers/Header'
import Footer from './containers/Footer'
import Sidebar from './containers/Sidebar'
import Searchbar from './containers/Searchbar'
import Homepage from './pages/HomePage'
import { useDispatch } from 'react-redux'
import { loadTeams, loadLanguages } from './redux/actions'
import CountryPage from './pages/CountryPage'
import TeamPage from './pages/TeamPage'
import AboutusPage from './components/AboutusPage'
import SearchPage from './pages/SearchPage'

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

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTeams())
    dispatch(loadLanguages())
  }, [dispatch])

  return (
    <Router>
      <Switch>
        <Route path="/:language/country/:countryName">
          <GeneralComponents />
          <CountryPage />
        </Route>
        <Route path="/:language/team/:teamName">
          <GeneralComponents />
          <TeamPage />
        </Route>
        <Route path="/:language/search/:searchText">
          <GeneralComponents />
          <SearchPage />
        </Route>
        <Route path="/:language/aboutus/">
          <GeneralComponents />
          <AboutusPage />
        </Route>
        <Route path="/:language/">
          <GeneralComponents />
          <Homepage />
        </Route>
        <Route path="*">
          <Redirect to="/en" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}
