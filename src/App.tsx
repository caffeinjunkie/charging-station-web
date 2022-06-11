import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RootNavigation from './root/RootNavigation';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RootNavigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
