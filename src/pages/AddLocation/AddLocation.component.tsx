import React from 'react';
import { FaPlus } from 'react-icons/fa';

import { Props } from './AddLocation.type';
import config from './AddLocation.config';
import { LocationHookForm } from '../../components/LocationHookForm';
import { useTranslation as translate } from '../../hooks/useTranslation';
import { useMutationRequest, post } from '../../hooks/useMutation';

const { SCREEN_NAME } = config;

const AddLocation = (props: Props) => {
  const { navigate } = props;
  // move to handler
  const handleSaveLocation = async (callbackData: any) => {
    const { values, setError } = callbackData;
    const payload = {
      path: '/locations',
      body: values
    }
    
    const { savedLocation, error } = await post(payload);
    
    if (error) {
      const { formKey, messageKey } = error;
      setError(formKey, translate(messageKey))
    }
    
    navigate('/')
  }
  
  return (
    <LocationHookForm
      screenName={SCREEN_NAME}
      name="Add"
      locationTitle={translate(`${SCREEN_NAME}-AddLocationForm-title`)}
      locationFormIcon={FaPlus}
      handleSaveLocation={handleSaveLocation}
      {...props}
    />
  )
}

export default AddLocation;
