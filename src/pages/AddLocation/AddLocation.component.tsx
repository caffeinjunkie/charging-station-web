import React from 'react';
import { FaPlus } from 'react-icons/fa';

import { Props } from './AddLocation.type';
import config from './AddLocation.config';
import { LocationHookForm } from '../../components/LocationHookForm';
import { useTranslation as translate } from "../../hooks/useTranslation";

const { SCREEN_NAME } = config;

const AddLocation = (props: Props) => (
  <LocationHookForm
    screenName={SCREEN_NAME}
    name="Add"
    locationTitle={translate(`${SCREEN_NAME}-AddLocationForm-title`)}
    locationFormIcon={FaPlus}
    {...props}
  />
)

export default AddLocation;
