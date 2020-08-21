import React from 'react';
import './styles/App.scss';
import WeatherComponent from './components/WeatherComponent';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <WeatherComponent />
    </div>
  );
}

export default App;
