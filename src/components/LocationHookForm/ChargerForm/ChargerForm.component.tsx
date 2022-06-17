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
  
  const renderInput = (inputProps: any) => {
    const { name } = inputProps;
    return (
      <StyledInputContainer key={name}>
        <InputForm
          control={control}
          screenName={screenName}
          errors={errors}
          type="text"
          key={name}
          {...inputProps}
        />
      </StyledInputContainer>
    )
  }
  
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
