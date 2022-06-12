import React from 'react';
import { cleanup, render, fireEvent, RenderResult } from '@testing-library/react';

import Button from './Button.component';

describe('Button', () => {
  let result: RenderResult;
  const buttonText = 'Button Text';
  const onClick = jest.fn();
  const screenName = 'Screen';
  const name = 'Name';
  const buttonTestId = `${screenName}_${name}_Button`;
  const props = {
    text: buttonText,
    screenName,
    onClick,
    name
  };

  beforeEach(() => {
    result = render(<Button {...props} />);
  });

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  describe('#render', () => {
    it('should render buttonText', () => {
      const { getByText } = result;

      expect(getByText(buttonText)).toBeTruthy();
    });

    it('should invoke onClick when button is clicked', () => {
      const { getByTestId } = result;
      const button = getByTestId(buttonTestId);

      fireEvent.click(button);

      expect(onClick).toBeCalled();
    });
  });
});
