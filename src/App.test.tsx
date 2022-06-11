import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from "react-router-dom";

import App from './App';

describe('App', () => {
  let wrapper;
  let rootNavigation: any;
  
  beforeEach(() => {
    wrapper = shallow(<App />);
    
    rootNavigation = wrapper.find('RootNavigation');
  });
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  describe('#render', () => {
    it('should render root navigation and browser router', () => {
      expect(rootNavigation).toHaveLength(1);
      expect(BrowserRouter).toHaveLength(1);
    });
  });
});
