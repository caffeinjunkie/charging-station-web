import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import Root from './Root';
import RootNavigation from './RootNavigation';
import RootStyles from './Root.styles';

describe('Root', () => {
  describe('#render', () => {
    it('should have BrowserRouter, RootNavigation, and RootStyles', () => {
      const wrapper = shallow(<Root />);

      expect(wrapper.find(BrowserRouter)).toHaveLength(1);
      expect(wrapper.find(RootNavigation)).toHaveLength(1);
      expect(wrapper.find(RootStyles)).toHaveLength(1);
    });
  });
});
