export interface Props {
  onClick?: () => void,
  screenName: string,
  text: string,
  disabled?: boolean,
  renderIcon?: Function,
  className?: string
}
