import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Paths from './Paths';
import { Dashboard } from '../../pages/Dashboard';

const RootNavigation = () => {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path={Paths.Dashboard} element={<Dashboard navigate={navigate}/> } />
    </Routes>
  );
}

export default RootNavigation;
