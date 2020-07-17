import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Header from './containers/Header'
import Sidebar from './containers/Sidebar'
import Searchbar from './containers/Searchbar'
import Homepage from './pages/HomePage'
import { useDispatch } from 'react-redux'
import { loadTeams, loadLanguages } from './redux/actions'
import CountryPage from './pages/CountryPage'
import TeamPage from './pages/TeamPage'
export default function App() {
  const dispatch = useDispatch()
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isOpenSearch, setIsOpenSearch] = useState(false)
  const toggleMenu = (isOpen) => {
    setIsOpenMenu(isOpen)
  }
  const toggleSearch = (isOpen) => {
    setIsOpenSearch(isOpen)
  }

  useEffect(() => {
    dispatch(loadTeams())
    dispatch(loadLanguages())
  }, [dispatch])

  return (
    <Router>
      <Header toggleMenu={toggleMenu} toggleSearch={toggleSearch} />
      <Sidebar toggleMenu={toggleMenu} isOpen={isOpenMenu} />
      <Searchbar toggleSearch={toggleSearch} isOpen={isOpenSearch} />
      <Switch>
        <Route path="/country/:countryName">
          <CountryPage />
        </Route>
        <Route path="/team/:teamName">
          <TeamPage />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  )
}
