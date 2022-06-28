import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import RootNavigation from './root/RootNavigation';
import { Header } from './components/Header';
import { i18n } from './utils';

const queryClient = new QueryClient();

interface LanguageOption {
  name: string
  locale: string
}

const App = () => {
  const defaultLocale = {
    name: 'EN',
    locale: 'en-US'
  };
  const [selectedLanguage, setSelectedLanguage] = React.useState(defaultLocale);
  
  React.useEffect(() => {
    i18n.changeLanguage(selectedLanguage.locale)
  }, [])
  
  const handleSelectLanguage = (language: LanguageOption) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language.locale)
  }
  
  return (
    <BrowserRouter>
      <Header
        selectedLanguage={selectedLanguage}
        onSelectLanguage={handleSelectLanguage}
      />
      <QueryClientProvider client={queryClient}>
        <RootNavigation />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
