import logo from './logo.svg';
import './App.css';
//import React from "react";
import Login from './Login';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
import reducer from './reducer';

const spotify = new SpotifyWebApi()

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue()

  // run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ''

    const _token = hash.access_token

    if(_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })
    }

    console.log('I HAVE A TOKEN >>>', token)
  }, [])

  //console.log('😎', user)
  //console.log('🤓', token)

  return (
    <div className="App">
      {
        token ? (
          <Player spotify={ spotify }/>
          ): (
          <Login /> 
          )
      }
    </div>
  );
}

export default App;
