import logo from './logo.svg';
import './App.css';
//import React from "react";
import Login from './Login';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';

function App() {
  const [token, setToken] = useState(null)

  // run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ''

    const _token = hash.access_token

    if(_token) {
      setToken(_token)
    }

    console.log('I HAVE A TOKEN >>>', token)
  }, [])
  return (
    <div className="App">
      {
        token ? (
          <h1>Estou Logado</h1>
          ): (
          <Login /> 
          )
      }
    </div>
  );
}

export default App;
