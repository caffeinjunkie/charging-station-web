import React from 'react';
import {cleanup, render, fireEvent, RenderResult } from '@testing-library/react';

import Dropdown from './Dropdown.component';

describe('Dropdown', () => {
  let result: RenderResult;
  const onChange = jest.fn();
  const screenName = 'LocationHookForm';
  const name = 'country';
  const label = 'Country';
  const options = [
    {
      id: "1",
      name: "Netherlands"
    },
    {
      id: "2",
      name: "Switzerland"
    }
  ]
  const props = {
    screenName,
    onChange,
    label,
    name,
    options,
    value: "Netherlands"
  };

  beforeEach(() => {
    result = render(<Dropdown {...props} />);
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  describe('#render', () => {
    it('should render label when label is provided', () => {
      const { getByText } = result;

      expect(getByText('LocationHookForm-country-label')).toBeTruthy();
    });
  
    it('should render placeholder value', () => {
      const { getByText } = result;
      
      expect(getByText('LocationHookForm-country-placeholder-text')).toBeTruthy();
    });
  
    it('should render options', () => {
      const { getByText } = result;
    
      expect(getByText('Netherlands')).toBeTruthy();
      expect(getByText('Switzerland')).toBeTruthy();
    });
  });
  
  describe('#onChange', () => {
    it('should call onChange with options Netherlands', () => {
      const { getByTestId } = result;
      
      fireEvent.change(getByTestId(`${screenName}_LocationHookForm-country-label_Select`), 'Netherlands');
      
      expect(onChange).toHaveBeenCalledWith(options[0])
    });
  });
});
