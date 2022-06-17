import React from 'react';
import { cleanup, render, fireEvent, RenderResult } from '@testing-library/react';

import Dropdown from './Dropdown.component';

describe('Dropdown', () => {
  let result: RenderResult;
  const dropDownDisplayValue = 'Value example';
  const dropDownLabelText = 'Label Example';
  const onChange = jest.fn();
  const screenName = 'LocationHookForm-label';
  const name = 'country';
  const dropDownTestId = `${screenName}_${name}_Select`;
  const props = {
    screenName,
    onChange,
    label: dropDownLabelText,
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
    it('should render dropDownDisplayValue when value is provided', () => {
      const { getByDisplayValue, rerender } = result;
      rerender(<Dropdown {...props} value={dropDownDisplayValue} />);

      expect(getByDisplayValue(dropDownDisplayValue)).toBeTruthy();
    });

    it('should render dropDownLabelText as text and label text', () => {
      const { getByTestId } = result;

      expect(getByTestId(dropDownLabelText)).toBeTruthy();
    });
    
    describe('#onChange', () => {
      it('should invoke onChange when dropDown is changed', () => {
        const { getByTestId } = result;
        const dropDown = getByTestId(dropDownTestId);

        fireEvent.change(dropDown, { target: { value: 'Change value' } });

        expect(onChange).toBeCalledWith();
      });
    });
  });
});
