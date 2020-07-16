import React, { useState } from 'react'
import Header from './containers/Header'
import Sidebar from './containers/Sidebar'
export default function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const toggleMenu = (isOpen) => {
    setIsOpenMenu(isOpen)
  }
  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <Sidebar toggleMenu={toggleMenu} isOpen={isOpenMenu} />
    </>
  )
}
