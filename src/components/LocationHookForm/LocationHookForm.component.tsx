import React from 'react';
import { FaBolt, FaPlus } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

import { Props } from './LocationHookForm.type';
import { StyledContainer } from './LocationHookForm.styles';
import { CardView } from '../CardView';
import { useTranslation as translate } from '../../hooks/useTranslation';
import config from './LocationHookForm.config';
import InputForm from '../InputForm/InputForm.component';
import { LocationForm } from "./LocationForm";

const { formConfig } = config;

const LocationHookForm = (props: Props) => {
  const {
    mapCountries,
    mapChargerTypes,
    screenName,
    name,
    locationFormIcon,
    locationTitle
  } = props;
  const { options, rules } = formConfig()
  
  const {
    control,
    handleSubmit,
    setError,
    trigger,
    formState: { errors, isValid }
  } = useForm(options);
  
  const renderLocationForm = () => <LocationForm
    control={control}
    screenName={screenName}
    errors={errors}
  />
  
  return (
    <StyledContainer>
      <CardView
        screenName={screenName}
        renderIcon={locationFormIcon}
        title={locationTitle}
        renderContent={renderLocationForm}
        name={`${name}Location`}
        key={`${name}Location`}
      />
      <CardView
        screenName={screenName}
        renderIcon={() => <FaBolt />}
        title={translate('LocationHookForm-ChargersForm-title')}
        renderContent={() => <div>aaa</div>}
        name={`${name}Chargers`}
        key={`${name}Chargers`}
      />
    </StyledContainer>
  )
}

LocationHookForm.defaultProps = config.defaultProps;

export default LocationHookForm;
