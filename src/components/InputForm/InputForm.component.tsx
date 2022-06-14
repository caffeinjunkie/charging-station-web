import React from 'react';
import { useController } from 'react-hook-form';
import TextInput from '../TextInput/TextInput.component';

// import type { Props } from './InputForm.type';
// import config from './InputForm.config';
// import { StyledInputFormContainer } from './InputForm.styles';

const InputForm = (props: any): JSX.Element => {
  const {
    control, name, label, rules, errors, screenName,
    type, maxLength, isNumeric, onChangeValue, disabled,
    isCached
  } = props;
  
  const { field } = useController({
    name,
    control,
    rules,
    defaultValue: disabled
  });
  const { onChange, value } = field;

  if (isCached) {
    // saveRegistrationState(name, value);
  }

  const setOnChange = (event: any) => {
    let newValue = event.target.value;
    if (onChangeValue) {
      newValue = newValue && onChangeValue(newValue);
    }
    if (maxLength) {
      newValue = newValue.slice(0, maxLength);
    }
    onChange(newValue);
  };
  
  return (
    <TextInput
      onChange={onChange}
      screenName={screenName}
      name={name}
      label={label}
      errors={errors}
      value={value}
      disabled={disabled}
      type={type}
      isNumeric={isNumeric}
      maxLength={maxLength}
    />
  );
};

// InputForm.defaultProps = config.defaultProps;

export default InputForm;
