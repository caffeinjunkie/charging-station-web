import React from 'react';
import { shallow } from 'enzyme';

import InputForm from './InputForm.component';
import { TextInput } from './TextInput';
import { Dropdown } from './Dropdown';

const mockField = {
  value: 'Blommendal',
  onChange: jest.fn()
};

jest.mock('react-hook-form', () => ({
  useController: () => ({
    field: mockField
  })
}));

describe('InputForm', () => {
  const control = {
    register: () => {}
  };
  const props = {
    screenName: 'Screen',
    control,
    errors: {
      name: {
        message: 'Name must be filled'
      }
    },
    name: 'name',
    rules: { required: 'Name must be filled' },
    disabled: false
  };
  describe('#render', () => {
    it('should render TextInput', () => {
      const wrapper = shallow(<InputForm {...props} />)
      
      expect(wrapper.find(TextInput)).toHaveLength(1);
    });
  
    it('should render Dropdown when isDropdown true', () => {
      const updatedProps = {
        ...props,
        isDropdown: true
      }
      const wrapper = shallow(<InputForm {...updatedProps} />)
  
      expect(wrapper.find(Dropdown)).toHaveLength(1);
    });
  });
});
