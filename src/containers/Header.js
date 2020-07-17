import React from 'react'
import HeaderComponent from '../components/Header'
import { useHistory } from 'react-router-dom'
const Header = ({ toggleMenu, toggleSearch }) => {
  const history = useHistory()
  const openMenu = (e) => {
    toggleMenu(true)
  }

  const openSearch = (e) => {
    toggleSearch(true)
  }

  const handleLogoClick = (e) => {
    history.push('/')
  }
  return (
    <HeaderComponent
      openMenu={openMenu}
      openSearch={openSearch}
      handleLogoClick={handleLogoClick}
    />
  )
}
export default Header
