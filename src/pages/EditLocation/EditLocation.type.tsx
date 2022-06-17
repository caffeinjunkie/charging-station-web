export interface CountryAttributesType {
  countryName: string
  countryAbbreviation: string
}

export interface CountryDataType {
  id: number
  attributes: CountryAttributesType
}

export interface ChargerTypeAttributesType {
  type: string
}

export interface ChargerTypeDataType {
  id: number
  attributes: ChargerTypeAttributesType
}

interface ChargerAttributesType {
  type: string
  serialNumber: string
  status: string
}

export interface ChargerType {
  data: Array<ChargerDataType>
}

export interface CountryType {
  data: CountryDataType
}

export interface ChargerDataType {
  id: number
  attributes: ChargerAttributesType
}

export interface ChargerPayloadType {
  id: string
  type: string
  serialNumber: string
  status: string
  updatedAt: string
}

export interface SaveChargerPayloadType {
  type: string
  serialNumber: string
  status: string
}

export interface EditChargerPayloadType {
  id: string
  type: string
  serialNumber: string
  status: string
}

export interface Props {
  navigate: Function
  fetchedData: any
  mapCountries: Function
  mapChargerTypes: Function
  handleSaveLocation: Function
  handleUpdateCharger: Function
  handleBackButtonClick: Function
  handleSaveCharger: Function
  handleRemoveLocation: Function
  mapHookFormDefaultValues: Function
  mapPayload: Function
}
