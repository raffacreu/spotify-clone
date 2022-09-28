import React from 'react'
import Body from './Body'
import Sidebar from './Sidebar'
import './Player.css'


function Player({ spotify }) {
  return (
    <div className='player'>
        <div className='player_body'>
            <Sidebar />
            <Body />
        </div>

        //footer
    </div>
  )
}

export default Player