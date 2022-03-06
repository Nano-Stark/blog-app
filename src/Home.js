import React from 'react'
import './Home.css'
import image from './project.jpg'

function Home() {
  return (
    <div className="home">
        <div className="home_content">
            <h2>Samuel Agbana</h2>
            <p>
                Hello and welcome. 
                I'm Philipp Maier, 
                a course developer with Google Cloud 
                Platform and this is a brief tutorial
                on using Qwiklabs in this course. 
                I'm about to show you the interactive
                hands-on labs platform called 
                Qwiklabs which is part of Google Cloud.
            </p>
        </div>
        <img src={image} alt="" />

    </div>
  )
}

export default Home