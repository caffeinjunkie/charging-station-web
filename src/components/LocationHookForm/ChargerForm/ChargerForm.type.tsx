export interface ChargerTypeType {
  id: number
  name: string
}

export interface Props {
  screenName: string
  listOfChargerType: Array<ChargerTypeType>
  defaultChargerFormValues: Object
}
