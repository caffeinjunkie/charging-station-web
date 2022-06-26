import { isEmpty } from 'lodash';

import type {
  Props,
  LocationType
} from './Dashboard.type';
import config from './Dashboard.config';
import { TimeUtil } from '../../utils';

const { TextAlign, DefaultFetchVariables, DefaultLimit } = config;
const { timeSince } = TimeUtil;

const constructFetchResult = (renderEditButton: Function, locationsData: Array<LocationType>) =>
  locationsData?.map((location: LocationType) => {
  const { id, attributes } = location
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
      value: renderEditButton(id),
      className: TextAlign.RIGHT
    }
  }
});

const refetchLocations = (props: Props) => (queryVariables: any) => {
  const { refetch } = props;
  const refetchVariables = {
    ...DefaultFetchVariables,
    ...queryVariables
  };
  
  refetch(refetchVariables)
};

const getPaginationAndSortVariables = (data: any, sortBy: string, isAsc: boolean) => {
  const { locations: { meta: { pagination } } } = data;
  const orderBy = isAsc ? 'ASC' : 'DESC';
  const sortVariable = `${sortBy}:${orderBy}`
  
  return {
    pagination,
    sortVariable
  }
};

const getTableNavigationProps = (props: Props) => (sortBy: string, isAsc: boolean) => {
  const { fetchedData } = props;
  if(isEmpty(fetchedData)) {
    return {};
  }
  
  const { pagination, sortVariable } = getPaginationAndSortVariables(fetchedData, sortBy, isAsc);
  const { page, pageCount } = pagination;
  const isFirstPage = page === 1;
  const isLastPage = page === pageCount;
  
  return {
    next: {
      disabled: isLastPage,
      onClick: () => {
        const queryVariables = {
          pagination: {
            page: page + 1,
            pageSize: DefaultLimit
          },
          sort: [sortVariable]
        };
        refetchLocations(props)(queryVariables)
      }
    },
    previous: {
      disabled: isFirstPage,
      onClick: () => {
        const queryVariables = {
          pagination: {
            page: page - 1,
            pageSize: DefaultLimit
          },
          sort: [sortVariable]
        };
        refetchLocations(props)(queryVariables)
      }
    }
  }
};

const sortTable = (props: Props) => (sortBy: string, isAsc: boolean) => {
  const { fetchedData } = props;
  if(isEmpty(fetchedData)) {
    return {};
  }
  
  const { pagination, sortVariable } = getPaginationAndSortVariables(fetchedData, sortBy, isAsc);
  const { page } = pagination;
  
  const queryVariables = {
    pagination: {
      page,
      pageSize: DefaultLimit
    },
    sort: [sortVariable]
  };
  
  return refetchLocations(props)(queryVariables)
};


const prepareTableData = (props: Props) => (renderEditButton: Function) => {
  const { fetchedData } = props;
  if(isEmpty(fetchedData)) {
    return [];
  }
  
  const { locations: { data } }= fetchedData;
  return constructFetchResult(renderEditButton, data);
};

export default {
  prepareTableData,
  getTableNavigationProps,
  sortTable
};
