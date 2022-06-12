import React from 'react';
import { isEmpty } from "lodash";

import { Button } from '../../components/Button';
import type { LocationAttributesType, LocationType, Props } from './Dashboard.type';
import config from './Dashboard.config';
import { TimeUtil } from '../../utils';

const { TextAlign } = config;
const { timeSince } = TimeUtil;

const prepareDataForTable = (props: Props) => () => {
  const { fetchData } = props;
  const locations = fetchData?.locations?.data;
  if(isEmpty(locations)) {
    return [];
  };
  return locations?.map(({ attributes }: LocationType) => {
    const { name, locationNo, chargers, updatedAt, country } = attributes;
    return {
      locationName: {
        value: name,
        className: TextAlign.LEFT
      },
      locationNo: {
        value: locationNo,
        className: TextAlign.LEFT
      },
      chargers: {
        value: chargers.data.length,
        className: TextAlign.CENTER
      },
      country: {
        value: country.data?.attributes.countryAbbreviation,
        className: TextAlign.CENTER
      },
      lastUpdated: {
        value: timeSince(updatedAt),
        className: TextAlign.CENTER
      },
      actions: {
        value: <Button name="EditButton" screenName="Dashboard" className="action-button" text="Edit"/>,
        className: TextAlign.RIGHT
      }
    }
  });
};

export default {
  prepareDataForTable
};
