import { isEmpty } from 'lodash';

import type { Props, ChargerTypeDataType, CountryDataType } from './AddLocation.type';
import { post } from '../../hooks/useAxiosPost';
import Paths from '../../root/RootNavigation/Paths';
import { useSubmissionLoading } from '../../hooks/useSubmissionLoading';

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

const onSubmit = (props: Props) => async (values: any, setError: Function) => {
  const { navigate } = props;
  
  const mappedBody = {
    ...values,
    country: values.country.id,
    chargers: []
  }
  const payload = {
    path: '/locations',
    body: mappedBody
  }
  
  const response = await post(payload);
  if (response.error) {
    const { key, message } = response.error;
    setError(key, { message });
    return;
  }
  
  navigate(Paths.Dashboard);
}

const handleSaveLocation = (props: Props) => async (values: any, setError: Function) => {
  await useSubmissionLoading(props, () => onSubmit(props)(values, setError));
};

export default {
  mapCountries,
  mapChargerTypes,
  handleSaveLocation
};
