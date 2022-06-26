interface CountryAttributesType {
  countryName: string
  countryAbbreviation: string
}

interface CountryDataType {
  id: number
  attributes: CountryAttributesType
}

export interface CountryType {
  data: CountryDataType
}

interface ChargerAttributesType {
  type: string
  serialNumber: string
  status: string
}

export interface ChargerDataType {
  id: number
  attributes: ChargerAttributesType
}

export interface ChargerType {
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
  id:string
  attributes: LocationAttributesType
}

export interface Props {
  navigate: Function
  prepareTableData: Function
  fetchedData: any
  refetch: Function
  getTableNavigationProps: Function
  sortTable: Function
}
