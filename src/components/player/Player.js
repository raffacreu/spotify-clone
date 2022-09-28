import React from 'react'
import Body from '../body/Body'
import Sidebar from '../sidebar/Sidebar'
import './Player.css'
import Footer from '../footer/Footer'


function Player({ spotify }) {
  return (
    <div className='player'>
        <div className='player_body'>
            <Sidebar />
            <Body />
        </div>

        <Footer />
    </div>
  )
}

export default Player