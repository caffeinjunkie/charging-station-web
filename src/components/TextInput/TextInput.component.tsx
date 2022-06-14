import * as React from 'react';

import type { Props } from './TextInput.type';
import {
  StyledLabel,
  StyledInput,
  StyledInputContainer,
  StyledErrorText,
  StyledContainer,
  StyledErrorIcon,
  StyledContainerBorder
} from './TextInput.styles';
import { TestUtils } from '../../utils';
import { useTranslation as translate } from '../../hooks/useTranslation';
import config from './TextInput.config';

// const { testProps, removeNonNumericChars } = utils;
const { testProps } = TestUtils;
const { removeNonNumericChars } = config;

const TextInput = (props: Props): JSX.Element => {
  const {
    onChange,
    onBlur,
    onKeyDown,
    screenName,
    name,
    value,
    label,
    errors = {},
    renderRightIcon = () => { },
    disabled,
    type,
    maxLength,
    autoComplete,
    isNumeric
  } = props;
  const id = `${screenName}_${name}_Input`;
  const error = errors[name];

  const handleChange = ({ target: { value: initialValue } }: any) => {
    const filteredValue = isNumeric ? removeNonNumericChars(initialValue) : initialValue;
    const trimmedValue = maxLength ? filteredValue.slice(0, maxLength) : filteredValue;
    onChange(trimmedValue);
  };

  return (
    <StyledContainerBorder className={error && 'error'}>
        <StyledContainer>
          <StyledInputContainer>
            <StyledLabel>
              {label}
            </StyledLabel>
            <StyledInput
              type={type}
              onChange={handleChange}
              onKeyDown={onKeyDown}
              onBlur={onBlur}
              placeholder={label}
              value={value}
              autoComplete={autoComplete}
              disabled={disabled}
              {...testProps('aaa')}
            />
          </StyledInputContainer>
        </StyledContainer>
        {error && <StyledErrorText>{translate(error.message)}</StyledErrorText>}
      </StyledContainerBorder>
  );
};

TextInput.defaultProps = config.defaultProps;

export default TextInput;
