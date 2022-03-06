import React from 'react'
import './PortfolioOption.css'

function PortfolioOption({ src, title }) {
  return (
    <div className="portfolio_option">
        <h3>{title}</h3>
        <img src={src} alt="" />
    </div>
  )
}

export default PortfolioOption