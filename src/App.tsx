import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import RootNavigation from './root/RootNavigation';
import { Header } from './components/Header';
import { i18n } from './utils';

const queryClient = new QueryClient();

function App() {
  i18n.changeLanguage('en-US');
  
  return (
    <BrowserRouter>
      <Header />
      <QueryClientProvider client={queryClient}>
        <RootNavigation />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
