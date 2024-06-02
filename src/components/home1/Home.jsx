import React from 'react'
import Landing from './landing/Landing'
import './home.css'
import Who from './who/Who'

const HomeOne = () => {
  return (
    <div className="home">
        <Landing />
        <Who />
    </div>
  )
}

export default HomeOne