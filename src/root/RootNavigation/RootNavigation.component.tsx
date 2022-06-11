import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Paths from './Paths';
import Dashboard from '../../pages/Dashboard/Dashboard.component';

const RootNavigation = () => (
  <Routes>
    <Route path={Paths.Dashboard}>
      <Dashboard />
    </Route>
  </Routes>
);

export default RootNavigation;
