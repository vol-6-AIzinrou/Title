// App.js
import React from 'react';
import './App.css';
import backgroundImage from './Title_back.png';
import overlayImage from './Title_jinro.png';

const App = () => {
  return (
    <div className="app" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay" style={{ backgroundImage: `url(${overlayImage})` }}/>
      <div className="text-overlay">push the title</div>
    </div>
  );
};

export default App;
