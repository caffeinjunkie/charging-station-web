import * as React from 'react';

import type { Props } from './TextInput.type';
import {
  StyledLabel,
  StyledInput,
  StyledInputContainer,
  StyledErrorText,
  StyledContainer,
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
    screenName,
    name,
    value,
    label,
    errors = {},
    disabled,
    type,
    maxLength,
    isNumeric
  } = props;
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
              placeholder={label}
              value={value}
              disabled={disabled}
              {...testProps(`${screenName}_${name}_Input`)}
            />
          </StyledInputContainer>
        </StyledContainer>
        {error && <StyledErrorText>{translate(error.message)}</StyledErrorText>}
      </StyledContainerBorder>
  );
};

TextInput.defaultProps = config.defaultProps;

export default TextInput;
