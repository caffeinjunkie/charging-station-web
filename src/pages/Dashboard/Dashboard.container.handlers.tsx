import { isEmpty } from 'lodash';

import type { LocationType, Props } from './Dashboard.type';
import config from './Dashboard.config';
import { TimeUtil } from '../../utils';

const { TextAlign, DefaultFetchVariables, DefaultLimit } = config;
const { timeSince } = TimeUtil;

const prepareDataForTable = (props: Props) => (renderEditButton: Function) => {
  const { fetchedData } = props;
  if(isEmpty(fetchedData)) {
    return [];
  }
  const { locations: { data } } = fetchedData;
  return data?.map(({ attributes }: LocationType) => {
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
  });
};

const refetchLocations = (props: Props) => async (setCurrentPage: Function, toPage: number) => {
  const { refetch } = props;
  setCurrentPage(toPage);
  const refetchVariables = {
    ...DefaultFetchVariables,
    pagination: {
      page: toPage,
      pageSize: DefaultLimit
    }
  }
  
  await refetch();
  console.log(refetchVariables)
}

const getPaginationData = (props: Props) => () => {
  const { fetchedData } = props;
  if(isEmpty(fetchedData)) {
    return {};
  }
  const { locations: { meta: { pagination } } } = fetchedData;
  
  return pagination;
}

export default {
  prepareDataForTable,
  getPaginationData,
  refetchLocations
};
