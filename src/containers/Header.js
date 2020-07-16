import React from 'react'
import HeaderComponent from '../components/Header'
const Header = ({ toggleMenu, toggleSearch }) => {
  const openMenu = (e) => {
    toggleMenu(true)
  }

  const openSearch = (e) => {
    toggleSearch(true)
  }

  return <HeaderComponent openMenu={openMenu} openSearch={openSearch} />
}
export default Header
