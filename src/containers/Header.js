import React from 'react'
import HeaderComponent from '../components/Header'
const Header = ({ toggleMenu }) => {
  const openMenu = (e) => {
    toggleMenu(true)
  }
  return <HeaderComponent openMenu={openMenu} />
}
export default Header
