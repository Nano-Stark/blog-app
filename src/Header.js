import { Close, Menu } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useState } from 'react'

import './Header.css'

function Header() {

    const [menu, setMenu] = useState(true);
    const MenuOpen = () => {
        setMenu(false);
    }
    const MenuClose = () => {
        setMenu(true);
    }
    // console.log(menu);
  return (
    <div className="header">
        <h1>Samuel A.</h1>
        <div className="header_content">
            <IconButton className="header_menu" onClick={MenuOpen}>
                <Menu />
            </IconButton>
            <div className={`header_options ${menu && "show"}`}>
                <IconButton className="header_close" onClick={MenuClose}>
                    <Close />
                </IconButton>
                <div className="header_option">
                    <h3>Home</h3>
                    <h3>Portfolio</h3>
                    <h3>About</h3>
                    <h3>Contact</h3>
                </div>
            </div>
            <div className="header_flex">
                <h3>Home</h3>
                <h3>Portfolio</h3>
                <h3>About</h3>
                <h3>Contact</h3>
            </div>
        </div>

    </div>
  )
}

export default Header