import React from 'react';

import type { Props } from './BackButton.type';
import { StyledContainer, StyledBackButton } from './BackButton.styles';
import { TestUtils } from '../../utils';

const { testProps } = TestUtils;

const BackButton = (props: Props): JSX.Element => {
  const {
    screenName,
    onClick
  } = props;
  
  return (
    <StyledContainer {...testProps(`${screenName}_BackButton_Container`)}>
      <StyledBackButton {...testProps(`${screenName}_BackButton_Button`)} onClick={onClick} />
    </StyledContainer>
  )
};

export default BackButton;
