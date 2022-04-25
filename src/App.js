import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

function App(){
  const weatherApi = `${process.env.REACT_APP_WEATHER_URL}=detroit,michigan${process.env.REACT_APP_API_KEY}`;
  console.log(weatherApi);
  return (
    <div className="App">
      <div className="container">
        <div className="top"></div>
        <div className="bottom"></div>
      </div>
    </div>
  );
}

export default App;