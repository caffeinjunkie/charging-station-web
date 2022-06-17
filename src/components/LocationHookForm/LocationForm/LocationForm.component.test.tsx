import React from 'react';
import { shallow } from 'enzyme';

import LocationForm from './LocationForm.component';
import { InputForm } from '../../InputForm';

describe('LocationForm', () => {
  const control = {
    register: () => {}
  };
  const props = {
    control,
    errors: {}
  }
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  describe('#render', () => {
    it('should render 5 input forms', () => {
      const wrapper = shallow(<LocationForm {...props} />);
      const inputForm = wrapper.find(InputForm);
      
      expect(inputForm).toHaveLength(5);
    });
  });
});
