import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import EmptyRecords from './EmptyRecords.component';

describe('Header', () => {
  let result: RenderResult;
  const screenName = 'Dashboard';
  const name = 'LocationList';
  const props = {
    colSpan: 4,
    screenName,
    name
  }

  beforeEach(() => {
    result = render(<EmptyRecords {...props} />)
  });

  describe('#render', () => {
    it('should render empty records text', () => {
      const emptyTextTestId = 'Dashboard_LocationList_EmptyRecords_Text';
      const { getByTestId } = result;
      
      expect(getByTestId(emptyTextTestId)).toBeTruthy();
    });
  });
});
