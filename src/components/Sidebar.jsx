import React from 'react'
import { Drawer } from '@material-ui/core'

const Sidebar = ({ isOpen, closeMenu }) => {
  return (
    <div>
      <Drawer anchor="left" open={isOpen} onClose={closeMenu}>
        <div> Sidebar </div>
      </Drawer>
    </div>
  )
}

export default Sidebar
