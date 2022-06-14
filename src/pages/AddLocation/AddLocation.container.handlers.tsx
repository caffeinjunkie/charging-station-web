import { isEmpty } from 'lodash';

import type { Props, ChargerTypeDataType, CountryDataType } from './AddLocation.type';

// const constructFetchResult = (renderEditButton: Function, locationsData: Array<LocationType>) =>
//   locationsData?.map(({ attributes }: LocationType) => {
//   const { name, locationNo, chargers, updatedAt, country } = attributes;
//   return {
//     locationName: {
//       value: name,
//       className: TextAlign.LEFT
//     },
//     locationNo: {
//       value: locationNo,
//       className: TextAlign.LEFT
//     },
//     chargers: {
//       value: chargers.data.length,
//       className: TextAlign.CENTER
//     },
//     country: {
//       value: country.data?.attributes.countryAbbreviation,
//       className: TextAlign.CENTER
//     },
//     lastUpdated: {
//       value: timeSince(updatedAt),
//       className: TextAlign.CENTER
//     },
//     actions: {
//       value: renderEditButton(),
//       className: TextAlign.RIGHT
//     }
//   }
// });

const mapCountries = (props: Props) => () => {
  const { fetchedData } = props;
  if(isEmpty(fetchedData)) {
    return [];
  }
  
  const { countries: { data } } = fetchedData;
  
  return data.map(({ id, attributes }: CountryDataType) => ({
    id,
    name: attributes.countryName
  }));
};

const mapChargerTypes = (props: Props) => () => {
  const { fetchedData } = props;
  if(isEmpty(fetchedData)) {
    return [];
  }
  
  const { chargerTypes: { data } } = fetchedData;
  
  return data.map(({ id, attributes }: ChargerTypeDataType) => ({
    id,
    name: attributes.type
  }));
};

export default {
  mapCountries,
  mapChargerTypes
};
