import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RootNavigation from './RootNavigation';
import RootStyles from './Root.styles';

const Root = () => (
  <BrowserRouter>
    <RootStyles />
    <RootNavigation />
  </BrowserRouter>
);

export default Root;
