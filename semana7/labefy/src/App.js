import React from 'react';
import './App.css';
import './Player/PlayList';
import PlayList from './Player/PlayList';
import Player from './Player/Player';

function App() {
  return (
    <div className="App">
      <h1>Labefy</h1>
      <PlayList />
      <hr />
      <Player />

    </div>

  );
}

export default App;
