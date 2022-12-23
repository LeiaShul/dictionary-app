import React from 'react';
import './App.css';
import Dictionary from './Dictionary'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Dictionary defaultKeyword="flower"/>
      </div>
      <footer className="text-center text-muted" >
        This project was coded by Lesia Shulezhko and is <a className="link" href="https://github.com/LeiaShul/dictionary-app" target="_blank" rel="noreferrer">open-sourced on GitHub</a>
      </footer>
    </div>
  );
}

export default App;
