import React from 'react';
import { useController } from 'react-hook-form';

import TextInput from './TextInput/TextInput.component';
import Dropdown from './Dropdown/Dropdown.component';

import type { Props } from './InputForm.type';
// import config from './InputForm.config';
// import { StyledInputFormContainer } from './InputForm.styles';

const InputForm = (props: Props): JSX.Element => {
  const {
    control, name, rules,
    disabled, isDropdown
  } = props;
  
  const { field } = useController({
    name,
    control,
    rules,
    defaultValue: disabled
  });
  const { onChange, value } = field;
  
  const renderDropdown = () => (
    <Dropdown
      value={value}
      onChange={onChange}
      {...props}
    />
  )
  
  const renderTextInput = () => (
    <TextInput
      onChange={onChange}
      value={value}
      {...props}
    />
  )

  return isDropdown ? renderDropdown() : renderTextInput();
};

// InputForm.defaultProps = config.defaultProps;

export default InputForm;
