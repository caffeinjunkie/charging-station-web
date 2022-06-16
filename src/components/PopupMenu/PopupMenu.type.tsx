export interface Props {
  isOpen: boolean
  screenName: string
  name: string
  title: string
  withButtons: boolean
  buttons: Array<any>
  withCloseButton: boolean
  onClickCloseButton: () => void
  renderContent: any
}

export interface ButtonPropsType {
  text: string
  onClick: () => void
  className: string
  name: string
  disabled: boolean
}
