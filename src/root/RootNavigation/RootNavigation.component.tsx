import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Paths from './Paths';
import { Dashboard } from '../../pages/Dashboard';
import { AddLocation } from '../../pages/AddLocation';
import { EditLocation } from '../../pages/EditLocation';

const RootNavigation = () => {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path={Paths.Dashboard} element={<Dashboard navigate={navigate}/> } />
      <Route path={Paths.AddLocation} element={<AddLocation navigate={navigate}/> } />
      <Route path={Paths.EditLocation} element={<EditLocation navigate={navigate}/> } />
    </Routes>
  );
}

export default RootNavigation;
