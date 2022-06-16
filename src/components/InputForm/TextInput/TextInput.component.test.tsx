import React from 'react';
import { cleanup, render, fireEvent, RenderResult } from '@testing-library/react';

import TextInput from './TextInput.component';

describe('TextInput', () => {
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
    result = render(<TextInput {...props} />);
  });

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  describe('#render', () => {
    it('should render textInputDisplayValue when value is provided', () => {
      const { getByDisplayValue, rerender } = result;
      rerender(<TextInput {...props} value={textInputDisplayValue} />);

      expect(getByDisplayValue(textInputDisplayValue)).toBeTruthy();
    });

    it('should render errorText when there is input error with message', () => {
      const { getByText, rerender } = result;
      const errorText = 'Error text example';
      const errors = { [name]: { message: errorText } };
      rerender(<TextInput {...props} errors={errors} />);

      expect(getByText(errorText)).toBeTruthy();
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
