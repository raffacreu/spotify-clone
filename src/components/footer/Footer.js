import React from 'react'
import './Footer.css'
import { PlayCircleOutline, SkipPrevious, SkipNext, Shuffle, Repeat, PlaylistPlay, VolumeDown} from '@mui/icons-material'
import { Grid, Slider } from '@mui/material'


function Footer({ spotify }) {
  return (
    <div className='footer'>
        <div className='footer_left'>
          <img className='footer_albumLogo' src='https://th.bing.com/th/id/R.8d59432d55ed46357c4cde99daa57780?rik=vMm01FR2tuvefg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-8X0r8wwliVw%2fTwo8WA_kfLI%2fAAAAAAAAE2c%2f_KeofdwsMqA%2fs1600%2fWallpaper%2b-Cachorros-papel-de-parede%2b%2525285%252529.jpg&ehk=dDy8R49R0cRadK0Yu7npBPLAYy9ufb2X1soU%2bQE6NJ8%3d&risl=&pid=ImgRaw&r=0'
           alt=''/>
          <div className='footer_songInfo'>
            <h4>Yeah!</h4>
            <p>Usher</p>
          </div>
        </div>

        <div className='footer_center'>
          <Shuffle className='footer_green' />
          <SkipPrevious className='footer_icon' />
          <PlayCircleOutline fontSize='large' className='footer_icon' />
          <SkipNext className='footer_icon' />
          <Repeat className='footer_green' />
        </div>

        <div className='footer_right'>
          <Grid container spacing={2}>
            <Grid>
              <PlaylistPlay className='footer_playlistPlay'/>
            </Grid>
            <Grid item>
              <VolumeDown />
            </Grid>
            <Grid item xs>
              <Slider className='footer_slider' />
            </Grid>
          </Grid>
        </div>

    </div>
  )
}

export default Footer