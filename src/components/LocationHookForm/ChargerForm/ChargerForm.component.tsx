import React from 'react';

import { Props } from './ChargerForm.type';
import {
  StyledContainer,
  StyledInputSectionContainer,
  StyledInputContainer
} from './ChargerForm.styles';
import InputForm from '../../InputForm/InputForm.component';
import config from './ChargerForm.config';

const { chargerFormProps } = config;

const ChargerForm = (props: Props) => {
  const {
    screenName,
    errors,
    control,
    listOfChargerType
  } = props;
  
  const renderInput = (inputProps: any) => (
    <StyledInputContainer key={inputProps.name}>
      <InputForm
        control={control}
        screenName={screenName}
        errors={errors}
        type="text"
        key={inputProps.name}
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
