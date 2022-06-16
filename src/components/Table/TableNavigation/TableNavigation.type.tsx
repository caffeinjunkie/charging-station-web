interface TableNavigationButtonProps {
  disabled: boolean
  onClick: () => void
}

export interface TableNavigationProps {
  next: TableNavigationButtonProps
  previous: TableNavigationButtonProps
}

export interface Props {
  screenName: string
  tableNavigationProps: TableNavigationProps
}
