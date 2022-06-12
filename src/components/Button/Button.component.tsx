import * as React from 'react';

import type { Props } from './Button.type';
import config from './Button.config';
import { StyledButton, StyledText } from './Button.styles';
import { TestUtils } from '../../util';

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
  
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      className={className}
      {...testProps(`${screenName}_${name}_Button`)}
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
