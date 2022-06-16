export interface Props {
  name: string,
  onClick?: () => void,
  screenName: string,
  text?: string,
  disabled?: boolean,
  renderIcon?: Function,
  className?: string
}
