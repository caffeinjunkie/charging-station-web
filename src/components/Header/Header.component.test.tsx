import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Header from './Header.component';
import FastnedLogo from "../../assets/images/FastnedLogo";

describe('Header', () => {
  let wrapper: ShallowWrapper;
  const headerContainerTestId = 'Header_Container';
  const selectedLanguage = {
    name: 'EN',
    locale: 'en-US'
  };
  const props = {
    selectedLanguage,
    onSelectLanguage: jest.fn()
  }

  beforeEach(() => {
    wrapper = shallow(<Header {...props} />)
  });

  describe('#render', () => {
    it('should render fastned image', () => {
      const headerContainer = wrapper.find({ id: headerContainerTestId })
      const fastnedLogo = wrapper.find(FastnedLogo)
    
      expect(headerContainer).toHaveLength(1);
      expect(fastnedLogo).toHaveLength(1);
    });
  });
});
