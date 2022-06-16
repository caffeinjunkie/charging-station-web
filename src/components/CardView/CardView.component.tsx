import React from 'react';

import { TestUtils } from '../../utils';

import type { Props } from './CardView.type';
import {
  StyledContainer,
  StyledTitle,
  StyledTitleContainer
} from './CardView.styles';
import config from './CardView.config';

const { testProps } = TestUtils;

const CardView = (props: Props): JSX.Element => {
  const {
    screenName,
    renderIcon,
    renderContent,
    title,
    name
  } = props;

  const renderTitle = () => (
    <StyledTitle
      {...testProps(`${screenName}_${name}_Title`)}
    >
      {renderIcon()}
      {title}
    </StyledTitle>
  );

  const renderTitleContainer = () => (
    <StyledTitleContainer>
      {renderTitle()}
    </StyledTitleContainer>
  );
  
  return (
    <StyledContainer>
      {renderTitleContainer()}
      {renderContent()}
    </StyledContainer>
  );
};

CardView.defaultProps = config.defaultProps;

export default CardView;
