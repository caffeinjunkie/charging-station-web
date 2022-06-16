import React from 'react';


import type { Props, ButtonPropsType } from './PopupMenu.type';
import {
  StyledPopupOverlay,
  StyledCloseButton,
  StyledContainer,
  StyledButtonContainer,
  StyledTitle,
  StyledHeaderContainer, StyledFooterContainer
} from './PopupMenu.styles';
import config from './PopupMenu.config';
import { Button } from '../Button';
import { TestUtils } from '../../utils';

const { testProps } = TestUtils;

const PopupMenu = (props: Props): JSX.Element => {
  const {
    isOpen,
    screenName,
    name,
    title,
    withButtons,
    buttons,
    renderContent,
    onClickCloseButton
  } = props;

  const renderCloseButton = () => (
    <StyledCloseButton
      {...testProps(`${screenName}_${name}Popup_CloseButton`)}
      onClick={onClickCloseButton}
     />
  );

  const renderButton = (button: ButtonPropsType, index: number) => {
    const {
      text,
      onClick,
      className,
      name: buttonName
    } = button;

    return (
      <StyledButtonContainer>
        <Button
          key={index}
          text={text}
          onClick={onClick}
          className={className}
          screenName={screenName}
          name={buttonName}
        />
      </StyledButtonContainer>
    );
  };

  return (
    <StyledPopupOverlay hidden={!isOpen} >
      <StyledContainer>
        <StyledHeaderContainer>
          <StyledTitle>{title}</StyledTitle>
          {renderCloseButton()}
        </StyledHeaderContainer>
        {renderContent()}
        { withButtons && (
          <StyledFooterContainer>
            {buttons.map(renderButton)}
          </StyledFooterContainer>
        )}
      </StyledContainer>
    </StyledPopupOverlay>
  );
};

PopupMenu.defaultProps = config.defaultProps;

export default PopupMenu;
