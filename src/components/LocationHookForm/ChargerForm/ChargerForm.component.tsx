import React from 'react';
import { useForm } from 'react-hook-form';
import { isEmpty } from 'lodash';

import { Props } from './ChargerForm.type';
import {
  StyledContainer,
  StyledInputSectionContainer,
  StyledInputContainer
} from './ChargerForm.styles';
import InputForm from '../../InputForm/InputForm.component';
import config from './ChargerForm.config';

const { chargerFormProps, defaultValuesConfig, defaultOptions } = config;

const ChargerForm = (props: Props) => {
  const {
    screenName,
    defaultChargerFormValues,
    listOfChargerType
  } = props;
  const defaultValues = isEmpty(defaultChargerFormValues) ?
    defaultValuesConfig(listOfChargerType) : defaultChargerFormValues
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid, isDirty }
  } = useForm({ ...defaultOptions, defaultValues });
  
  const renderInput = (inputProps: any) => (
    <StyledInputContainer key={inputProps.name}>
      <InputForm
        control={control}
        screenName={screenName}
        errors={errors}
        type="text"
        {...inputProps}
      />
    </StyledInputContainer>
  )
  
  return (
    <StyledContainer>
      <StyledInputSectionContainer>
        {chargerFormProps(listOfChargerType).map(renderInput)}
      </StyledInputSectionContainer>
    </StyledContainer>
  )
}

ChargerForm.defaultProps = config.defaultProps;

export default ChargerForm;
