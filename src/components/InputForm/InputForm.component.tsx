import React from 'react';
import { useController } from 'react-hook-form';

import TextInput from './TextInput/TextInput.component';
import Dropdown from './Dropdown/Dropdown.component';

import type { Props } from './InputForm.type';

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
      value={value ? value.name : ''}
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

export default InputForm;
