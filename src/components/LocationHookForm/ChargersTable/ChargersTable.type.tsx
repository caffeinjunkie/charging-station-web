export interface ChargerType {
  id: number
  type: string
  serialNumber: string
  status: string
  updatedAt: string
}

export interface ChargerTypeType {
  name: string
}

export interface Props {
  data: Array<ChargerType>
  screenName: string
  onClickEdit: Function
  onClickDelete: Function
}
