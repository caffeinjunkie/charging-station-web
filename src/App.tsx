import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RootNavigation from './root/RootNavigation';
import { Header } from './components/Header';
import { i18n } from './util';

function App() {
  i18n.changeLanguage('en-US');
  
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
