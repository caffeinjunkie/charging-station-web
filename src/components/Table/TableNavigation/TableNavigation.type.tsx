interface TableNavigationButtonProps {
  disabled: boolean
  onClick: () => void
}

interface TableNavigationProps {
  next: TableNavigationButtonProps
  previous: TableNavigationButtonProps
}

export interface Props {
  screenName: string
  tableNavigationProps: TableNavigationProps
}
