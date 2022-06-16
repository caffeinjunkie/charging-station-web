import { isEmpty } from 'lodash';

import type {
  Props,
  ChargerTypeDataType,
  CountryDataType,
  ChargerDataType,
  ChargerType,
  CountryType,
  ChargerPayloadType,
  SaveChargerPayloadType,
  EditChargerPayloadType
} from './EditLocation.type';
import { post, remove } from '../../hooks/useAxios';
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

const onDelete = (props: Props) => async () => {
  const { navigate } = props;
  const { id } = mapPayload(props)();
  const payload = {
    path: `/locations/${id}`
  }
  
  await remove(payload);
  
  navigate(Paths.Dashboard);
}

const onSaveCharger = () => async (
  savePayload: SaveChargerPayloadType,
  addedChargers: Array<ChargerType>,
  setAddedChargers: Function
) => {
  const payload = {
    path: '/chargers',
    body: savePayload
  }
  
  const response = await post(payload);
  
  setAddedChargers([...addedChargers, response]);
}

const onUpdateCharger = () => async (
  updatePayload: EditChargerPayloadType,
  addedChargers: Array<ChargerType>,
  setAddedChargers: Function
) => {
  const { id } = updatePayload;
  const payload = {
    path: `/chargers/${id}`,
    body: updatePayload
  }
  
  const response = await post(payload);
  
  const updatedChargers = addedChargers.map((charger: any) => {
    if (charger.id.toString() === id) {
      return response
    }
    return charger;
  })
  
  setAddedChargers(updatedChargers);
}

const onSubmit = (props: Props) => async (values: any, submitArgs: any) => {
  const { setError, chargers } = submitArgs;
  const { navigate } = props;
  const { id } = mapPayload(props)();
  const mappedBody = {
    ...values,
    id,
    country: values.country.id,
    chargers: chargers.map((charger: ChargerPayloadType) => charger.id.toString())
  }
  
  const payload = {
    path: `/locations/${id}`,
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

const mapPayload = (props: Props) => () => {
  const { fetchedData } = props;
  if(isEmpty(fetchedData)) {
    return {};
  }
  
  const { location: { data } } = fetchedData;
  const { id, attributes } = data;
  const { chargers, country, ...locationAttributes } = attributes;
  const { data: { id: countryId, attributes: countryAttributes } }: CountryType = country;
  const { data: listOfChargers }: ChargerType = chargers;
  const mappedChargers = listOfChargers.map((charger: ChargerDataType) => ({
    ...charger.attributes,
    id: charger.id
  }))
  
  return {
    id,
    ...locationAttributes,
    country: {
      id: countryId,
      ...countryAttributes
    },
    chargers: mappedChargers
  }
}

const mapHookFormDefaultValues = (props: Props) => () => {
  const { name, locationNo, city, postalCode, country }: any = mapPayload(props)();
  
  return {
    defaultValues: {
      name,
      locationNo,
      city,
      postalCode,
      country: {
        id: country.id,
        name: country.countryName
      }
    }
  }
}

const handleSaveLocation = (props: Props) => async (values: any, submitArgs: any) => {
  await useSubmissionLoading(props, () => onSubmit(props)(values, submitArgs));
};

const handleRemoveLocation = (props: Props) => async () => {
  await useSubmissionLoading(props, () => onDelete(props)());
}

const handleSaveCharger = (props: Props) => async (
  body: SaveChargerPayloadType,
  addedChargers: Array<ChargerType>,
  setAddedChargers: Function) => {
  await useSubmissionLoading(props, () => onSaveCharger()(body, addedChargers, setAddedChargers));
};

const handleUpdateCharger = (props: Props) => async (
  body: EditChargerPayloadType,
  addedChargers: Array<ChargerType>,
  setAddedChargers: Function) => {
  await useSubmissionLoading(props, () => onUpdateCharger()(body, addedChargers, setAddedChargers));
};

export default {
  mapCountries,
  mapChargerTypes,
  handleSaveLocation,
  mapPayload,
  handleUpdateCharger,
  handleRemoveLocation,
  mapHookFormDefaultValues,
  handleSaveCharger
};
