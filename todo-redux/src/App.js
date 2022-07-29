import React from 'react';
import { Router } from './Routes';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Router />
    </div>
  );
};

export default App;
