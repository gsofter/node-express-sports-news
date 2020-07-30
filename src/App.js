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
import { loadTeams, loadLanguages, loadBanners } from './redux/actions'
import CountryPage from './pages/CountryPage'
import TeamPage from './pages/TeamPage'
import AboutusPage from './components/AboutusPage'
import SearchPage from './pages/SearchPage'
import AdminPage from './pages/admin'

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
    dispatch(loadBanners())
  }, [dispatch])

  return (
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
  )
}
