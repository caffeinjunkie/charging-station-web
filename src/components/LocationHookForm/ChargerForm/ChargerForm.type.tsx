export interface ChargerTypeType {
  id: number
  name: string
}

export interface Props {
  screenName: string
  errors: any
  control: any
  listOfChargerType: Array<ChargerTypeType>
}
