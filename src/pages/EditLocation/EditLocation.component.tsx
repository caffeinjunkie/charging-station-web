import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { Props } from './EditLocation.type';
import config from './EditLocation.config';
import { LocationHookForm } from '../../components/LocationHookForm';

const { SCREEN_NAME } = config;

const EditLocation = (props: Props) => {
  const {
    mapHookFormDefaultValues
  } = props;
  const formOptions = mapHookFormDefaultValues();
  
  return (
    <LocationHookForm
      screenName={SCREEN_NAME}
      name="Edit"
      locationTitle={formOptions.defaultValues.name}
      locationFormIcon={FaMapMarkerAlt}
      formOptions={formOptions}
      {...props}
    />
  )
}

export default EditLocation;
