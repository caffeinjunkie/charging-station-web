import React from 'react';

import { TestUtils } from '../../utils';
import { StyledLoadingContainer, StyledLoadingSpinner } from './LoadingOverlay.styles';

const { testProps } = TestUtils;

const LoadingOverlay = (): JSX.Element => (
  <StyledLoadingContainer
    {...testProps('LoadingOverlay-container')}
  >
    <StyledLoadingSpinner {...testProps('LoadingOverlay-spinner')} />
  </StyledLoadingContainer>
);

export default LoadingOverlay;
