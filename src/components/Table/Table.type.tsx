export interface ColumnType {
  key: string
  accessor: string
  className: string
}

export interface ContentType {
  value: string
  className: string
}

export interface Props {
  columns: Array<ColumnType>
  data: Array<Object>
  screenName: string
  name: string
}
