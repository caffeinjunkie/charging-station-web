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
  mapCountries: Function
  mapChargerTypes: Function
  onSaveButtonClick: () => void
  onRemoveButtonClick?: () => void
  locationFormIcon: any
  responseError?: any
  screenName: string
  name: string
  locationTitle: string
  formOptions: any
  isValid: boolean
  errors: any
  control: any
}
