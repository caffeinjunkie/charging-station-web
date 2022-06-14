import React from 'react';

import type { Props, BackButtonProps } from './withBackButton.type';
import { StyledContainer, StyledBackButton } from './withBackButton.styles';

const withBackButton = (backButtonProps: BackButtonProps): Function => (ComposedComponent: any) => {
  function HOCBackButton(props: Props) {
    const { navigate } = props;
    const { redirectPath } = backButtonProps;
    return (
      <StyledContainer>
        <StyledBackButton onClick={() => navigate((redirectPath))} />
        <ComposedComponent {...props} />
      </StyledContainer>
    )
  }
  return HOCBackButton;
};

export default withBackButton;
