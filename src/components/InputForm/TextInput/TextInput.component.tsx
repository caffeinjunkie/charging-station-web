import * as React from 'react';

import type { Props } from './TextInput.type';
import {
  StyledLabel,
  StyledInput,
  StyledInputContainer,
  StyledErrorText,
  StyledContainer
} from './TextInput.styles';
import { TestUtils } from '../../../utils';
import { useTranslation as translate } from '../../../hooks/useTranslation';
import config from './TextInput.config';

const { testProps } = TestUtils;

const TextInput = (props: Props): JSX.Element => {
  const {
    onChange,
    screenName,
    name,
    value,
    errors = {},
    disabled,
    type,
    maxLength
  } = props;
  const error = errors[name];
  const label = translate(`LocationHookForm-${name}-label`);

  const handleChange = ({ target: { value: initialValue } }: any) => {
    const trimmedValue = maxLength ? initialValue.slice(0, maxLength) : initialValue;
    onChange(trimmedValue);
  };

  return (
    <>
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
            className={error && 'error'}
            {...testProps(`${screenName}_${name}_Input`)}
          />
        </StyledInputContainer>
      </StyledContainer>
      {error && <StyledErrorText>{translate(error.message)}</StyledErrorText>}
    </>
  );
};

TextInput.defaultProps = config.defaultProps;

export default TextInput;
