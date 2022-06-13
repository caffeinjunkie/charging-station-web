import { isEmpty } from 'lodash';

import type { LocationType } from './Dashboard.type';
import config from './Dashboard.config';
import { TimeUtil } from '../../utils';
import gql from './Dashboard.graphql';
import { useQueryRequest as fetch } from '../../hooks/useQuery';

const { TextAlign, DefaultFetchVariables, DefaultLimit, EmptyFetchResult } = config;
const { timeSince } = TimeUtil;
const { LocationsQuery } = gql;

const constructFetchResult = (renderEditButton: Function, locationsData: Array<LocationType>) =>
  locationsData?.map(({ attributes }: LocationType) => {
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
      value: renderEditButton(),
      className: TextAlign.RIGHT
    }
  }
})

const prepareDataForTable = () => (renderEditButton: Function, currentPage: number) => {
  const fetchVariables = {
    ...DefaultFetchVariables,
    pagination: {
      page: currentPage,
      pageSize: DefaultLimit
    }
  }
  const useQueryOptions =  {
    keepPreviousData: true
  }
  const { data, isLoading } = fetch(LocationsQuery, fetchVariables, useQueryOptions)
  
  if(isEmpty(data)) {
    return EmptyFetchResult;
  }
  
  const { locations: { data: locationsData, meta: { pagination } } } = data;
  const fetchedResult = constructFetchResult(renderEditButton, locationsData);
  
  return {
    fetchedResult,
    isLoading,
    pagination
  }
};

export default {
  prepareDataForTable
};
