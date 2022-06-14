import React from 'react';

import type { Props } from './Button.type';
import config from './Button.config';
import { StyledButton, StyledText } from './Button.styles';
import { TestUtils } from '../../utils';

const { testProps } = TestUtils;

const Button = (props: Props): JSX.Element => {
  const {
    text,
    name,
    onClick,
    disabled,
    className,
    screenName,
    renderIcon
  } = props;
  
  const renderText = () => (
    <StyledText className={className}>
      {text}
    </StyledText>
  );
  
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      className={className}
      {...testProps(`${screenName}_${name}_Button`)}
    >
      {renderIcon && renderIcon()}
      {text && renderText()}
    </StyledButton>
  );
};

Button.defaultProps = config.defaultProps;

export default Button;
