import * as React from 'react';
import { FaCaretDown } from 'react-icons/fa';

import type { Props, OptionType } from './Dropdown.type';
import {
  StyledLabel,
  StyledDropdownContainer,
  StyledDropdown,
  StyledContainer,
  StyledDropdownOverlay
} from './Dropdown.styles';
import { TestUtils, Conditionals } from '../../../utils';
import config from './Dropdown.config';
import { useTranslation as translate } from '../../../hooks/useTranslation';

const { testProps } = TestUtils;
const { isEmptyString } = Conditionals;

const Dropdown = (props: Props): JSX.Element => {
  const {
    onChange,
    screenName,
    name,
    value,
    disabled,
    options
  } = props;
  const label = translate(`LocationHookForm-${name}-label`);
  
  const handleChange = (event: any) => {
    const position = event.target.options.selectedIndex - 1;
    onChange(options[position]);
  }

  return (
    <StyledContainer>
      <StyledDropdownContainer>
        <StyledLabel>
          {label}
        </StyledLabel>
        <StyledDropdown onChange={handleChange} disabled={disabled} defaultValue={value}>
          <option
            value=""
            selected={isEmptyString(value)}
            disabled
            hidden
            key="defaultValue"
          >
            {translate(`${screenName}-${name}-placeholder-text`)}
          </option>
          {options.map((option: OptionType, index: number) => (
            <option
              key={option.id}
              {...testProps(`${screenName}_${label}${index}_option`)}
            >
              {option.name}
            </option>
          ))}
        </StyledDropdown>
        <StyledDropdownOverlay>
          <FaCaretDown />
        </StyledDropdownOverlay>
      </StyledDropdownContainer>
    </StyledContainer>
  );
};

Dropdown.defaultProps = config.defaultProps;

export default Dropdown;
