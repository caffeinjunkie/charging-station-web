import React from 'react';

import { Props } from './LocationForm.type';
import {
  StyledContainer,
  StyledInputSectionContainer,
  StyledInputContainer
} from './LocationForm.styles';
import InputForm from '../../InputForm/InputForm.component';
import config from './LocationForm.config';

const { locationFormConfig: { locationInputProps, addressInputProps } } = config;

const LocationForm = (props: Props) => {
  const {
    screenName,
    listOfCountries,
    control,
    errors
  } = props;
  
  const renderInput = (inputProps: any) => {
    if (inputProps.isDropdown) {
      Object.assign(inputProps, { options: listOfCountries })
    }
    
    return (
      <StyledInputContainer key={inputProps.name}>
        <InputForm
          key={inputProps.name}
          control={control}
          screenName={screenName}
          errors={errors}
          type="text"
          {...inputProps}
        />
      </StyledInputContainer>
    );
  }
  
  return (
    <StyledContainer>
      <StyledInputSectionContainer>
        {locationInputProps.map(renderInput)}
      </StyledInputSectionContainer>
      <StyledInputSectionContainer>
        {addressInputProps.map(renderInput)}
      </StyledInputSectionContainer>
    </StyledContainer>
  )
}

LocationForm.defaultProps = config.defaultProps;

export default LocationForm;
