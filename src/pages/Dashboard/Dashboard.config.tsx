// move to handler later
import React from 'react';

import { locationMock } from '../../fixture/locationData';
import { Button } from '../../components/Button';

interface ColumnType {
  key: string
  accessor: string,
  className: string
}

const TextAlign = {
  LEFT: 'align-left',
  CENTER: 'align-center',
  RIGHT: 'align-right'
}

const COLUMNS:Array<ColumnType> = [
  {
    key: 'Location',
    accessor: 'name',
    className: TextAlign.LEFT
  },
  {
    key: 'LocationNo',
    accessor: 'location',
    className: TextAlign.LEFT
  },
  {
    key: 'Chargers',
    accessor: 'chargers',
    className: TextAlign.CENTER
  },
  {
    key: 'Country',
    accessor: 'country',
    className: TextAlign.CENTER
  },
  {
    key: 'LastUpdated',
    accessor: 'lastUpdated',
    className: TextAlign.CENTER
  },
  {
    key: 'Actions',
    accessor: '',
    className: TextAlign.RIGHT
  }
];

interface LocationType {
  id:number
  name: string
  locationNo: number
  chargers: Array<Object>,
  postalCode: string,
  lastUpdated: string,
  country: string
}

// move to handler later with renderActionButton params
const mappedData = locationMock.map((location: LocationType) => {
  const { name, locationNo, chargers, lastUpdated, country } = location;
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
      value: chargers.length,
      className: TextAlign.CENTER
    },
    country: {
      value: country,
      className: TextAlign.CENTER
    },
    lastUpdated: {
      value: lastUpdated,
      className: TextAlign.CENTER
    },
    actions: {
      value: <Button name="EditButton" screenName="Dashboard" className="action-button" text="Edit"/>,
      className: TextAlign.RIGHT
    }
  }
});

export default {
  COLUMNS,
  data: mappedData
}
