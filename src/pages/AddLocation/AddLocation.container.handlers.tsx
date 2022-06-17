import { isEmpty } from 'lodash';

import { post, remove } from '../../hooks/useAxios';
import Paths from '../../root/RootNavigation/Paths';
import type {
  Props,
  ChargerTypeDataType,
  CountryDataType,
  ChargerType,
  SaveChargerPayloadType, EditChargerPayloadType
} from './AddLocation.type';
import { useSubmissionLoading } from '../../hooks/useSubmissionLoading';
import { ChargerDataType, CountryType } from "../EditLocation/EditLocation.type";

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
  
  const updatedChargers = addedChargers.map((charger: ChargerType) => {
    if (charger.id.toString() === id) {
      return response
    }
    return charger;
  })
  
  setAddedChargers(updatedChargers);
}

const onSubmit = (props: Props) => async (values: any, submitArgs: any) => {
  const { chargers, setError } = submitArgs;
  const { navigate } = props;
  const mappedBody = {
    ...values,
    country: values.country.id.toString(),
    chargers: chargers.map((charger: ChargerType) => charger.id.toString())
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

const handleSaveLocation = (props: Props) => async (values: any, submitArgs: any) => {
  await useSubmissionLoading(props, () => onSubmit(props)(values, submitArgs));
};

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

const onDeleteChargers = (props: Props) => async (chargers: Array<ChargerType>) => {
  const { navigate } = props;
  const payload = {
    path: '/delete-chargers',
    body: { chargers }
  }
  
  await post(payload);
  
  navigate(Paths.Dashboard);
}

const handleBackButtonClick = (props: Props) => async (chargers: Array<ChargerType>) => {
  await useSubmissionLoading(props, () => onDeleteChargers(props)(chargers))
}

export default {
  mapCountries,
  mapChargerTypes,
  handleSaveLocation,
  handleSaveCharger,
  handleUpdateCharger,
  handleBackButtonClick
};
