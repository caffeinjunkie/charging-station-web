import React from 'react';
import { FaBolt, FaSave } from 'react-icons/fa';
import { GoX } from 'react-icons/go';
import { useForm } from 'react-hook-form';

import { Props } from './LocationHookForm.type';
import {
  StyledContainer,
  StyledFooterButtonContainer
} from './LocationHookForm.styles';
import { LocationForm } from './LocationForm';
import { CardView } from '../CardView';
import { useTranslation as translate } from '../../hooks/useTranslation';
import config from './LocationHookForm.config';
import { Button } from '../Button';
import { TestUtils } from '../../utils';

const { defaultOptions, EDIT_LOCATION_PAGE } = config;
const { testProps } = TestUtils;

const LocationHookForm = (props: Props) => {
  const {
    mapCountries,
    mapChargerTypes,
    screenName,
    name,
    locationFormIcon,
    locationTitle,
    handleSaveLocation,
    formOptions
  } = props;
  const isEditLocationPage = screenName === EDIT_LOCATION_PAGE;
  
  const {
    control,
    handleSubmit,
    getValues,
    setError,
    trigger,
    formState: { errors, isValid }
  } = useForm({ ...defaultOptions, ...formOptions });
  
  const renderLocationForm = () => (
    <LocationForm
      control={control}
      screenName={screenName}
      errors={errors}
      listOfCountries={mapCountries()}
    />
  )
  
  const renderSaveButton = () => (
    <Button
      screenName={screenName}
      name={name}
      disabled={!isValid}
      text={translate(`${screenName}-saveButton-text`)}
      className="primary flex-end"
      renderIcon={FaSave}
      onClick={handleSubmit((values) => handleSaveLocation(values, setError))}
      {...testProps(`${screenName}_${name}Location_SaveButton`)}
    />
  )
  
  const renderRemoveButton = () => (
    <Button
      screenName={screenName}
      name={name}
      text={translate(`${screenName}-removeButton-text`)}
      className="secondary flex-start"
      renderIcon={GoX}
      onClick={handleSubmit((values) => handleSaveLocation(values, setError))}
      {...testProps(`${screenName}_${name}Location_SaveButton`)}
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
      <StyledFooterButtonContainer
        className={name.toLowerCase()}
      >
        {isEditLocationPage && renderRemoveButton()}
        {renderSaveButton()}
      </StyledFooterButtonContainer>
    </StyledContainer>
  )
}

LocationHookForm.defaultProps = config.defaultProps;

export default LocationHookForm;
