import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RootNavigation from './root/RootNavigation';
import './App.css';
import { Header } from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <RootNavigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
