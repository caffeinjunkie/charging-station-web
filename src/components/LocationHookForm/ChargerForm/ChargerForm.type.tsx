export interface ChargerTypeType {
  id: string
  name: string
}

export interface ChargerType {
  id: string
  type: string
  serialNumber: string
  status: string
  updatedAt: string
}


export interface Props {
  screenName: string
  errors: any
  control: any
  listOfChargerType: Array<ChargerTypeType>
}
