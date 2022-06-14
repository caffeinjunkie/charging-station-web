import React from 'react';

import { useTranslation as translate } from '../../hooks/useTranslation';
import { TestUtils } from '../../utils';

import type { Props } from './CardView.type';
import {
  StyledContainer,
  StyledTitle,
  StyledTitleBadge,
  StyledInformationText,
  StyledTitleContainer
} from './CardView.styles';
import config from './CardView.config';

const { testProps } = TestUtils;

const CardView = (props: Props): JSX.Element => {
  const {
    screenName,
    renderIcon,
    isInformationText,
    renderInformationIcon = () => {},
    renderContent,
    title,
    name,
    titleBadge
  } = props;

  const renderTitleBadge = () => (
    <StyledTitleBadge
      {...testProps(`${screenName}_${name}_TitleBadge`)}
    >
      {titleBadge}
    </StyledTitleBadge>
  );

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
      {titleBadge && renderTitleBadge()}
    </StyledTitleContainer>
  );

  const renderInformationText = () => (
    <StyledInformationText
      {...testProps(`${screenName}_Information_Text`)}
    >
      {renderInformationIcon()}
      {translate(`${screenName}-information-text`)}
    </StyledInformationText>
  );

  return (
    <StyledContainer>
      {renderTitleContainer()}
      {isInformationText && renderInformationText()}
      {renderContent()}
    </StyledContainer>
  );
};

CardView.defaultProps = config.defaultProps;

export default CardView;
