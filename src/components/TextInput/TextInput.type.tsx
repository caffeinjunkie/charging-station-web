export interface Props {
  name: string,
  label: string,
  onChange: Function,
  onBlur?: () => void,
  onKeyDown?: () => void,
  value?: string,
  screenName: string,
  type?: string,
  errors?: any,
  renderRightIcon?: any,
  disabled?: boolean,
  informationText?: string,
  maxLength?: number,
  autoComplete?: string,
  isNumeric?: boolean
}
