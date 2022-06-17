export interface ChargerTypeType {
  id: number
  name: string
}

export interface ChargerType {
  id: number
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
