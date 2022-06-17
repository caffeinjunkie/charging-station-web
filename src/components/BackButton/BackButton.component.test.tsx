import React from 'react';
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react';
import BackButton from "./BackButton.component";

describe('BackButton', () => {
  let result: RenderResult;
  const screenName = 'Screen';
  const onClick = jest.fn();
  const props = {
    screenName,
    onClick
  }
  
  beforeEach( () => {
    result = render(<BackButton {...props} />);
  });
  
  afterEach(() => {
    cleanup();
  });
  
  describe('#render', () => {
    it('should render button container and button', () => {
      const { getByTestId } = result;
      const buttonContainer = getByTestId('Screen_BackButton_Container');
      const buttonComponent = getByTestId('Screen_BackButton_Button');
      
      expect(buttonComponent).toBeTruthy();
      expect(buttonContainer).toBeTruthy();
    });
  });
  
  describe('#onClick', () => {
    it('should call onClick when button is clicked', () => {
      const { getByTestId } = result;
      const buttonComponent = getByTestId('Screen_BackButton_Button');
    
      fireEvent.click(buttonComponent);
    
      expect(onClick).toHaveBeenCalled();
    });
  });
});
