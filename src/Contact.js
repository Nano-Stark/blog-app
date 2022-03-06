import { Button } from '@mui/material'
import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className="contact">
        <h3>Contact</h3>
        <form className="contact_form">
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <textarea placeholder="Enter Message" />
            <Button>Contact</Button>
        </form>

    </div>
  )
}

export default Contact