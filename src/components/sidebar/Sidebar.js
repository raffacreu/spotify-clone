import { Home, LibraryMusic, Search } from '@mui/icons-material'
import React from 'react'
import { useDataLayerValue } from '../../context/DataLayer'
import './Sidebar.css'
import SideBarOption from './sidebarOption/SideBarOption'


function Sidebar() {
  const [{ playlists }, dispatch ] = useDataLayerValue()

  return (
    <div className='sidebar'>
        <img className='sidebar_logo' 
        src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' alt=''></img>
    
        <SideBarOption Icon={Home} title="Home" />
        <SideBarOption Icon={Search} title="Procurar" />
        <SideBarOption Icon={LibraryMusic}title="Sua biblioteca" />
        
        <br />
        <strong className='sidebar_title'>PLAYLIST</strong>
        <hr />

        {playlists?.items?.map(playlist =>(
          <SideBarOption title={playlist.name} />
        ))}
    </div>
  )
}

export default Sidebar