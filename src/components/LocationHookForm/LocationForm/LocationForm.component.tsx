import React from 'react';

// import { Props } from './LocationHookForm.type';
import {
  StyledContainer,
  StyledInputSectionContainer,
  StyledInputContainer
} from './LocationForm.styles';
import InputForm from '../../InputForm/InputForm.component';
import config from './LocationForm.config';
import { useTranslation as translate } from '../../../hooks/useTranslation';

const { locationFormConfig: { locationInputProps, addressInputProps } } = config;

const LocationForm = (props: any) => {
  const {
    screenName,
    listOfCountries,
    control,
    errors
  } = props;
  
  const renderInput = (inputProps: any) => {
    if (inputProps.isDropDown) {
      Object.assign(inputProps, { dropdownData: listOfCountries })
    }
    
    return (
      <StyledInputContainer key={inputProps.name}>
        <InputForm
          control={control}
          label={translate(`LocationHookForm-${inputProps.name}-label`)}
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
        {locationInputProps.map((renderInput))}
      </StyledInputSectionContainer>
      <StyledInputSectionContainer>
        {addressInputProps.map((renderInput))}
      </StyledInputSectionContainer>
    </StyledContainer>
  )
}

// LocationForm.defaultProps = config.defaultProps;

export default LocationForm;
