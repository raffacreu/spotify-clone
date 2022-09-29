import React from 'react'
import { useDataLayerValue } from '../../context/DataLayer'
import Header from '../header/Header'
import './Body.css'

function Body ({ spotify }) {
  const [{ discovery_weekly }, dispatch] = useDataLayerValue()

  return (
    <div className='body'>
        <Header spotify={spotify} />

        <div className='body_info'>
          <img className=''
          src={discovery_weekly?.images[0].url} alt=''/>
          <div className='body_infoText'>
            <strong>PLAYLIST</strong>
            <h2>Descobertas da Semana</h2>
            <p>{discovery_weekly?.description}</p>
          </div>
        </div>
    </div>
  )
}

export default Body