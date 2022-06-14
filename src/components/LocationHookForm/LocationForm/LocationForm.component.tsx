import React from 'react';
import { FaBolt, FaPlus } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

// import { Props } from './LocationHookForm.type';
import {
  StyledContainer,
  StyledInputSectionContainer,
  StyledInputContainer,
  StyledTitleText
} from './LocationForm.styles';
import InputForm from '../../InputForm/InputForm.component';
// import { CardView } from '../CardView';
// import { useTranslation as translate } from '../../hooks/useTranslation';
import config from './LocationForm.config';
import { useTranslation as translate } from '../../../hooks/useTranslation';
// import InputForm from "../InputForm/InputForm.component";

const { locationFormConfig: { locationInputProps, addressInputProps } } = config;

const LocationForm = (props: any) => {
  const {
    mapCountries,
    mapChargerTypes,
    screenName,
    name,
    locationFormIcon,
    locationTitle,
    control,
    errors
  } = props;
  
  return (
    <StyledContainer>
      <StyledInputSectionContainer>
        {locationInputProps.map((inputProps) => (
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
        ))}
      </StyledInputSectionContainer>
      <StyledInputSectionContainer>
        {addressInputProps.map((inputProps) => (
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
        ))}
      </StyledInputSectionContainer>
    </StyledContainer>
  )
}

// LocationForm.defaultProps = config.defaultProps;

export default LocationForm;
