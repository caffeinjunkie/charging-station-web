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

interface PaginationType {
  pageCount: number
  page: number
}

interface MetaType {
  pagination: PaginationType
}

interface FetchResultType {
  data: Array<LocationType>
  meta: MetaType
}

interface FetchDataType {
  locations: FetchResultType
}

export interface Props {
  navigate: Function
  prepareDataForTable: Function
  getPaginationData: Function
  refetchLocations: Function
  refetch: Function
  fetchedData: FetchDataType
  loading: boolean
}
