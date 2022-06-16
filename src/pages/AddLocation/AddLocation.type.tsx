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

export interface ChargerPayloadType {
  id: number
  type: string
  serialNumber: string
  status: string
  updatedAt: string
}

export interface Props {
  navigate: Function
  fetchedData: any
  mapCountries: Function
  mapChargerTypes: Function
  handleSaveLocation: Function
}
