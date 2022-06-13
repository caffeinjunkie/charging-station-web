interface CountryAttributesType {
  countryName: string
  countryAbbreviation: string
}

interface CountryDataType {
  id: number
  attributes: CountryAttributesType
}

interface CountryType {
  data: CountryDataType
}

interface ChargerAttributesType {
  type: string
  serialNumber: string
  status: string
}

interface ChargerDataType {
  id: number
  attributes: ChargerAttributesType
}

interface ChargerType {
  data: Array<ChargerDataType>
}

export interface LocationAttributesType {
  name: string
  locationNo: number
  chargers: ChargerType
  postalCode: string
  updatedAt: string
  country: CountryType
}

export interface LocationType {
  id:number
  attributes: LocationAttributesType
}

export interface Props {
  navigate: Function
  prepareDataForTable: Function
}
