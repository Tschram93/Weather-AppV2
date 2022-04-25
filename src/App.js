import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

function App(){
  const weatherApi = `${process.env.REACT_APP_WEATHER_UR}{city name},{state code}&limit={limit}&appid=${process.env.REACT_APP_API_KEY}`;
  console.log(process.env)
  return (
    <div className="App">

    </div>
  );
}

export default App;
