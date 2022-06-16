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
  trigger: Function
  onSaveButtonClick: () => void
  onRemoveButtonClick?: () => void
  locationFormIcon: any
  responseError?: any
  screenName: string
  name: string
  tableData: Array<ChargerType>
  setTableData: Function
  locationTitle: string
  formOptions: any
  isValid: boolean
  errors: any
  control: any
}
