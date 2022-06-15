import React from 'react';
import { cleanup, render, fireEvent, RenderResult } from '@testing-library/react';

import Dropdown from './Dropdown.component';

describe('Dropdown', () => {
  let result: RenderResult;
  const textInputDisplayValue = 'Value example';
  const textInputLabelText = 'Label Example';
  const onChange = jest.fn();
  const screenName = 'Screen';
  const name = 'Name';
  const textInputTestId = `${screenName}_${name}_Input`;
  const props = {
    screenName,
    onChange,
    label: textInputLabelText,
    name
  };

  beforeEach(() => {
    result = render(<Dropdown {...props} />);
  });

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  describe('#render', () => {
    it('should render textInputDisplayValue when value is provided', () => {
      const { getByDisplayValue, rerender } = result;
      rerender(<Dropdown {...props} value={textInputDisplayValue} />);

      expect(getByDisplayValue(textInputDisplayValue)).toBeTruthy();
    });

    it('should render textInputLabelText as text and label text', () => {
      const { getByText } = result;

      expect(getByText(textInputLabelText)).toBeTruthy();
    });
    
    describe('#onChange', () => {
      it('should invoke onChange when textInput is changed', () => {
        const { getByTestId } = result;
        const textInput = getByTestId(textInputTestId);

        fireEvent.change(textInput, { target: { value: 'Change value' } });

        expect(onChange).toBeCalled();
      });
    });
  });
});
