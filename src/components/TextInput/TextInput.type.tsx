export interface Props {
  name: string,
  label: string,
  onChange: Function,
  value?: string,
  screenName: string,
  type?: string,
  errors?: any,
  disabled?: boolean,
  maxLength?: number,
  isNumeric?: boolean
}
