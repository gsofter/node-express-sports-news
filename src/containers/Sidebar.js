import React from 'react'
import SidebarComponent from '../components/Sidebar'
const Sidebar = ({ isOpen, toggleMenu }) => {
  const closeMenu = (e) => {
    toggleMenu(false)
  }
  return <SidebarComponent closeMenu={closeMenu} isOpen={isOpen} />
}

export default Sidebar
