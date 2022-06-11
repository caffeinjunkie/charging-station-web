import * as React from 'react';

import type { Props } from './Button.type';
import config from './Button.config';
import { StyledButton, StyledText } from './Button.styles';

const Button = (props: Props): JSX.Element => {
  const {
    text,
    onClick,
    disabled,
    className,
    renderIcon
  } = props;
  
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {renderIcon && renderIcon()}
      <StyledText className={className}>
        {text}
      </StyledText>
    </StyledButton>
  );
};

Button.defaultProps = config.defaultProps;

export default Button;
