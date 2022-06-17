import React from 'react';
import { cleanup, render, RenderResult } from '@testing-library/react';

import CardView from './CardView.component';

describe('CardView', () => {
  let result: RenderResult;
  const renderIcon = jest.fn();
  const renderContent = jest.fn();
  const renderHeaderButton = jest.fn();
  const props = {
    screenName: 'Screen',
    renderIcon,
    renderContent,
    renderHeaderButton,
    title: "Title",
    name: "Name"
  };
  
  beforeEach(() => {
    result = render(<CardView {...props} />)
  });
  
  afterEach(() => {
    cleanup();
    jest.clearAllMocks()
  });

  describe('#render', () => {
    it('should render title with icon', () => {
      const { getByText } = result;
      
      expect(getByText('Title')).toBeTruthy();
      expect(renderIcon).toHaveBeenCalled();
    });
  
    it('should render header button when withHeaderButton props is provided', () => {
      render(<CardView {...props} withHeaderButton />);
    
      expect(renderHeaderButton).toHaveBeenCalled();
    });
  
    it('should not invoke render header button when withHeaderButton props is not provided', () => {
      expect(renderHeaderButton).not.toHaveBeenCalled();
    });
  });
});
