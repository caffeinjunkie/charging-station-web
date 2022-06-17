import React from 'react';
import { shallow } from 'enzyme';

import ChargerForm from './ChargerForm.component';
import { InputForm } from "../../InputForm";

describe('ChargerForm', () => {
  const listOfChargerType = [
    {
      id: "1",
      name: "Type 1"
    }
  ]
  const control = {
    register: () => {}
  };
  const props = {
    listOfChargerType,
    screenName: 'Screen',
    errors: {},
    control
  }
  describe('#render', () => {
    it('should render input form 3 times', () => {
      const wrapper = shallow(<ChargerForm {...props} />);
      const inputForm = wrapper.find(InputForm);
      
      expect(inputForm).toHaveLength(3);
    });
  });
});
