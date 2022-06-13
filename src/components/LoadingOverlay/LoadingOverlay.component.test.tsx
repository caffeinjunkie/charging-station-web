import React from 'react';
import { render } from '@testing-library/react';

import LoadingOverlay from './LoadingOverlay.component';

describe('LoadingOverlay', () => {
  describe('#render', () => {
    it('should render Loading Overlay container and spinner when isShown is true', () => {
      const { getByTestId } = render(<LoadingOverlay />);

      expect(getByTestId('LoadingOverlay-container')).toBeTruthy();
      expect(getByTestId('LoadingOverlay-spinner')).toBeTruthy();
    });
  });
});
