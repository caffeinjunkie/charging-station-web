import React from 'react';
import { FaBolt, FaPlus } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

import { Props } from './LocationHookForm.type';
import { StyledContainer } from './LocationHookForm.styles';
import { CardView } from '../CardView';
import { useTranslation as translate } from '../../hooks/useTranslation';
import config from './LocationHookForm.config';
import { LocationForm } from "./LocationForm";

const { formConfig } = config;

const LocationHookForm = (props: Props) => {
  const {
    mapCountries,
    mapChargerTypes,
    screenName,
    name,
    locationFormIcon,
    locationTitle,
    handleSaveLocation
  } = props;
  const { options } = formConfig()
  
  const {
    control,
    handleSubmit,
    setError,
    trigger,
    formState: { errors, isValid }
  } = useForm(options);
  
  const renderLocationForm = () => (
    <LocationForm
      control={control}
      screenName={screenName}
      errors={errors}
      listOfCountries={mapCountries()}
    />
  )
  
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
        title={translate('LocationHookForm-chargersForm-title')}
        renderContent={() => <div>aaa</div>}
        name={`${name}Chargers`}
        key={`${name}Chargers`}
      />
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      {isValid && <div
        onClick={handleSubmit((values) => handleSaveLocation({ values, setError }))}
      >
        save button
      </div>}
    </StyledContainer>
  )
}

LocationHookForm.defaultProps = config.defaultProps;

export default LocationHookForm;
