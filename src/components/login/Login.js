import React from 'react'
import './Login.css';
import { loginUrl } from '../../services/spotify';

function Login() {
  return (
    <div className='login'>
        <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png' alt=''></img>
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login