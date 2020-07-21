import React, { useEffect } from 'react'
import SidebarComponent from '../components/Sidebar'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setMyTeam } from '../redux/actions'
const Sidebar = ({ isOpen, toggleMenu }) => {
  const teams = useSelector((state) => state.teams)
  const languages = useSelector((state) => state.languages)
  const history = useHistory()
  const dispatch = useDispatch()
  const closeMenu = (e) => {
    toggleMenu(false)
  }

  const handleClickCountry = (args) => {
    toggleMenu(false)
    history.push(`/${args.language}/country/${args.country}`)
  }

  const handleClickTeam = (args) => {
    toggleMenu(false)
    dispatch(setMyTeam({ ...args.team, language: args.language }))
    history.push(`/${args.language}/team/${encodeURI(args.team.name)}`)
  }

  const handleClickLanguage = (language) => {
    toggleMenu(false)
    history.push(`/${language}`)
  }
  return (
    <SidebarComponent
      closeMenu={closeMenu}
      isOpen={isOpen}
      teams={teams}
      languages={languages}
      handleClickCountry={handleClickCountry}
      handleClickTeam={handleClickTeam}
      handleClickLanguage={handleClickLanguage}
    />
  )
}

export default Sidebar
