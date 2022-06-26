export interface ColumnType {
  key: string
  accessor: string
  className: string
  sortable?: boolean
}

export interface ContentType {
  value: string
  className: string
}

interface TableNavigationButtonProps {
  disabled: boolean
  onClick: () => void
}

interface TableNavigationProps {
  next: TableNavigationButtonProps
  previous: TableNavigationButtonProps
}

export interface Props {
  columns: Array<ColumnType>
  data: Array<Object>
  screenName: string
  name: string
  withTableNavigation?: boolean
  sortProps?: any
  tableNavigationProps: TableNavigationProps
  onClickHeaderText: (key: string) => void
  withSorting?: boolean
}
