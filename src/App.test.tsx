import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from "react-router-dom";

import App from './App';
import { Header } from './components/Header';

describe('App', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  describe('#render', () => {
    it('should render header, root navigation and browser router', () => {
      const wrapper = shallow(<App />);
      const rootNavigation = wrapper.find('RootNavigation');
      const headerComponent = wrapper.find(Header);
      
      expect(headerComponent).toHaveLength(1);
      expect(rootNavigation).toHaveLength(1);
      expect(BrowserRouter).toHaveLength(1);
    });
  });
});
