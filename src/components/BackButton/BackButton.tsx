import React from 'react';

import type { Props } from './BackButton.type';
import { StyledContainer, StyledBackButton } from './BackButton.styles';

const BackButton = (props: Props): JSX.Element => {
  const { onClick } = props;
  
  return (
    <StyledContainer>
      <StyledBackButton onClick={onClick} />
    </StyledContainer>
  )
};

export default BackButton;
