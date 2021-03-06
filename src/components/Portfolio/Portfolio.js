import './Portfolio.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import React, { useEffect, useState } from 'react'
import portfolioData from '../../data/portfolio.json'
import Loader from 'react-loaders'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timeoutld = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => {
      clearTimeout(timeoutld)
    }
  }, [])

  const renderPortfolio = (portfolio) => {
    return (
      <div className="image-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.cover}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx="15"
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
