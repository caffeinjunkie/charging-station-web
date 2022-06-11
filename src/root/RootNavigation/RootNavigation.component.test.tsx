import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import RootNavigation from './RootNavigation.component';
import Dashboard from '../../pages/Dashboard/Dashboard.component';

describe('RootNavigation', () => {
  describe('#render', () => {
    it.skip('should have dashboard page when accessing /', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
          <RootNavigation />
        </MemoryRouter>
      );
      
      expect(wrapper.find(Dashboard)).toHaveLength(1);
    });
  });
});
