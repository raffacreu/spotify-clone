import { Favorite, MoreHoriz, PlayCircleFilled } from '@mui/icons-material'
import React from 'react'
import { useDataLayerValue } from '../../context/DataLayer'
import Header from '../header/Header'
import SongRow from '../songrow/SongRow'
import './Body.css'

function Body ({ spotify }) {
  const [{ discovery_weekly }, dispatch] = useDataLayerValue()

  const playPlaylist = (id) => {
    spotify.play({
      context_uri:`spotify:playlist:37i9dQZEVXcCpA0TBnOrqy`,
    }).then((response) => {
      spotify.getMyCurrentPlayingTrack().then((res) => {
        dispatch({
          type: 'SET_ITEM',
          item: res.item
        })
        dispatch({
          type:'SET_PLAYING',
          playing: true,
        })
      })
    })
  }

  const playSong = (id) => {
    spotify.play({
      uris:[`spotify:tracks:${id}`],
    }).then((response) => {
      spotify.getMyCurrentPlayingTrack().then((res) => {
        dispatch({
          type: 'SET_ITEM',
          item: res.item,
        })
        dispatch({
          type: 'SET_PLAYING',
          playing: true,
        })
      })
    })
  }

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

        <div className='body_songs'>
        <div className='body_icons'>
          <PlayCircleFilled className='body_shuffle' onClick={ playPlaylist } />
          <Favorite fontSize='large' />
          <MoreHoriz />
        </div>  

          {discovery_weekly?.tracks.items.map((item) => (
            <SongRow playSong={ playSong } track={item.track} />
          ))}
        </div>
    </div>
  )
}

export default Body