export interface CountryType {
  id: number
  countryName: string
  countryAbbreviation: string
}

interface ChargerTypeAttributesType {
  type: string
}

export interface ChargerTypeDataType {
  id: number
  attributes: ChargerTypeAttributesType
}

export interface Props {
  screenName: string
  listOfCountries: Array<CountryType>
  control: Object
  errors: Object
}
