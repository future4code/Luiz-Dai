import React, { useState, useEffect } from 'react';
import Profile from './components/Profile';
import Match from './components/Match';
import styled from 'styled-components';
import { Centralizado } from './components/styles'




function App() {
  return (
    <Centralizado>
      <Profile />
    </Centralizado>
  );
}

export default App;
