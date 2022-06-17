interface CountryAttributesType {
  countryName: string
  countryAbbreviation: string
}

export interface CountryDataType {
  id: number
  attributes: CountryAttributesType
}

interface ChargerTypeAttributesType {
  type: string
}

export interface ChargerTypeDataType {
  id: number
  attributes: ChargerTypeAttributesType
}

export interface ChargerType {
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

export interface CountryDropDownType {
  id: string
  name: string
}

export interface Props {
  navigate: Function
  fetchedData: any
  mapCountries: Function
  handleUpdateCharger: Function
  mapChargerTypes: Function
  handleSaveLocation: Function
  handleSaveCharger: Function
}
