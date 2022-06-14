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

export interface Props {
  navigate: Function
  fetchedData: any
  loading: boolean
  mapCountries: Function
  mapChargerTypes: Function
  handleSaveLocation: Function
  locationFormIcon: any
  screenName: string
  name: string
  locationTitle: string
}
