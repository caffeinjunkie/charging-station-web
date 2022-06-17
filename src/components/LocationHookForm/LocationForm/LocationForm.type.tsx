export interface CountryType {
  id: number
  countryName: string
  countryAbbreviation: string
}

export interface Props {
  screenName: string
  listOfCountries: Array<CountryType>
  control: Object
  errors: Object
}
