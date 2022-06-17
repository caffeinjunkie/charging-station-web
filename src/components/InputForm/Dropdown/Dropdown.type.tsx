export interface OptionType {
  id: string
  name: string
}

export interface Props {
  name: string
  onChange: any
  value: any
  screenName: string
  disabled?: boolean
  options: Array<OptionType>
}
