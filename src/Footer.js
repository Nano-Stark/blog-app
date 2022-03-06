import { Facebook, GitHub, Instagram, Twitter } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className="footer_icon">
            <IconButton>
                <Twitter />
            </IconButton>
            <IconButton>
                <Facebook />
            </IconButton>
            <IconButton>
                <Instagram />
            </IconButton>
            <IconButton>
                <GitHub />
            </IconButton>
        </div>
        <p>c 2022. InventorStark.</p>
    </div>
  )
}

export default Footer