import React from 'react'
import './Portfolio.css'
import PortfolioOption from './PortfolioOption'
import image from './project.jpg'


function Portfolio() {
  return (

    <div className="portfolios">
        <h3>Portfolio</h3>
    <div className="portfolio">
        <PortfolioOption 
            src={image}
            title="Instagram clone"
        />

        <PortfolioOption 
            src={image}
            title="Instagram clone"
        />

        <PortfolioOption 
            src={image}
            title="Instagram clone"
        />

        <PortfolioOption 
            src={image}
            title="Instagram clone"
        />

        <PortfolioOption 
            src={image}
            title="Instagram clone"
        />

        <PortfolioOption 
            src={image}
            title="Instagram clone"
        />

    </div>
    </div>
  )
}

export default Portfolio