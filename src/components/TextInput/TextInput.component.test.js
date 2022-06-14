import React from 'react';
import { shallow } from 'enzyme';
import { cleanup, render, fireEvent } from '@testing-library/react';

import TextInput from './TextInput.component';
// import { StyledErrorIcon } from './TextInput.styles';

describe('TextInput', () => {
  let result;
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
    // it('should not have StyledErrorIcon when there is no input error', () => {
    //   const wrapper = shallow(<TextInput {...props} />);
    //   const styledErrorIcon = wrapper.find(StyledErrorIcon);
    //
    //   expect(styledErrorIcon).toHaveLength(0);
    // });
    //
    // it('should have StyledErrorIcon when there is input error', () => {
    //   const errors = { [name]: {} };
    //   const wrapper = shallow(<TextInput {...props} errors={errors} />);
    //   const styledErrorIcon = wrapper.find(StyledErrorIcon);
    //
    //   expect(styledErrorIcon).toHaveLength(1);
    // });

    it('should render textInputDisplayValue when value is provided', () => {
      const { getByDisplayValue, rerender } = result;
      rerender(<TextInput {...props} value={textInputDisplayValue} />);

      expect(getByDisplayValue(textInputDisplayValue)).toBeTruthy();
    });

    it('should render informationText when information text is provided', () => {
      const { rerender, getByText } = result;
      const informationText = 'Information text example';
      rerender(<TextInput {...props} informationText={informationText} />);

      expect(getByText(informationText)).toBeTruthy();
    });

    it('should render textInputLabelText as text and label text', () => {
      const { getByLabelText, getByText } = result;

      expect(getByText(textInputLabelText)).toBeTruthy();
      expect(getByLabelText(textInputLabelText)).toBeTruthy();
    });

    it('should render errorText when there is input error with message', () => {
      const { getByText, rerender } = result;
      const errorText = 'Error text example';
      const errors = { [name]: { message: errorText } };
      rerender(<TextInput {...props} errors={errors} />);

      expect(getByText(errorText)).toBeTruthy();
    });

    it('should render rightIconText when renderRightIcon is provided', () => {
      const rightIconText = 'This is right icon example';
      const renderRightIcon = () => <p>{rightIconText}</p>;
      const { getByText, rerender } = result;
      rerender(<TextInput {...props} renderRightIcon={renderRightIcon} />);

      expect(getByText(rightIconText)).toBeTruthy();
    });

    it('should not render rightIconText when there is input error', () => {
      const rightIconText = 'This is right icon example';
      const renderRightIcon = () => <p>{rightIconText}</p>;
      const { queryByText, rerender } = result;
      const errorText = 'Error text example';
      const errors = { [name]: { message: errorText } };
      rerender(<TextInput {...props} renderRightIcon={renderRightIcon} errors={errors} />);

      expect(queryByText(rightIconText)).toBeFalsy();
    });

    describe('#onChange', () => {
      it('should invoke onChange when textInput is changed', () => {
        const { getByTestId } = result;
        const textInput = getByTestId(textInputTestId);

        fireEvent.change(textInput, { target: { value: 'Change value' } });

        expect(onChange).toBeCalled();
      });

      it('should invoke onChange with 123 when input value is 12345, isNumeric is true and maxLength is 3', () => {
        const isNumericProps = {
          ...props,
          isNumeric: true,
          maxLength: 3
        };
        const { getByTestId, rerender } = result;
        const textInput = getByTestId(textInputTestId);
        const expectedValue = '123';
        rerender(<TextInput {...isNumericProps} />);

        fireEvent.change(textInput, { target: { value: '12345' } });

        expect(onChange).toBeCalledWith(expectedValue);
      });

      it('should invoke onChange with 12 when input value is 1#r 2 and isNumeric is true', () => {
        const isNumericProps = {
          ...props,
          isNumeric: true
        };
        const { getByTestId, rerender } = result;
        const textInput = getByTestId(textInputTestId);
        const expectedValue = '12';
        rerender(<TextInput {...isNumericProps} />);

        fireEvent.change(textInput, { target: { value: '1#r 2' } });

        expect(onChange).toBeCalledWith(expectedValue);
      });
    });
  });
});
