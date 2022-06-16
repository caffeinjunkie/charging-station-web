import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

import { Props } from './EditLocation.type';
import config from './EditLocation.config';
import { LocationHookForm } from '../../components/LocationHookForm';
import BackButton from "../../components/BackButton/BackButton";
import Paths from "../../root/RootNavigation/Paths";

const { SCREEN_NAME, defaultOptions } = config;

const EditLocation = (props: Props) => {
  const {
    navigate,
    mapHookFormDefaultValues,
    handleSaveLocation
  } = props;
  const formOptions = mapHookFormDefaultValues();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid, isDirty }
  } = useForm({ ...defaultOptions, ...formOptions });
  const [addedChargers, setAddedChargers] = React.useState([]);
  const isFormValid = isValid && isDirty;
  
  const onBackButtonClick = () => {
    if (isDirty) {
      console.log('something has changed')
      // render pop up
      return
    }
    navigate(Paths.Dashboard);
  }
  
  return (
    <>
      <BackButton onClick={onBackButtonClick} />
      <LocationHookForm
        screenName={SCREEN_NAME}
        name="Edit"
        locationTitle={formOptions.defaultValues.name}
        locationFormIcon={FaMapMarkerAlt}
        formOptions={formOptions}
        control={control}
        errors={errors}
        isValid={isFormValid}
        onSaveButtonClick={handleSubmit((values: any) => handleSaveLocation(values, setError))}
        onRemoveButtonClick={() => {}}
        {...props}
      />
    </>
  )
}

export default EditLocation;
