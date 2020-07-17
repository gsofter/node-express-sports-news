import React, { useEffect } from 'react'
import SidebarComponent from '../components/Sidebar'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
const Sidebar = ({ isOpen, toggleMenu }) => {
  const teams = useSelector((state) => state.teams)
  const history = useHistory()
  const closeMenu = (e) => {
    toggleMenu(false)
  }

  const handleClickCountry = (country) => {
    toggleMenu(false)
    history.push(`/country/${country}`)
  }

  const handleClickTeam = (team) => {
    toggleMenu(false)
    history.push(`/team/${encodeURI(team)}`)
  }
  return (
    <SidebarComponent
      closeMenu={closeMenu}
      isOpen={isOpen}
      teams={teams}
      handleClickCountry={handleClickCountry}
      handleClickTeam={handleClickTeam}
    />
  )
}

export default Sidebar
