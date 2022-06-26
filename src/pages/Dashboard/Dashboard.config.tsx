interface ColumnType {
  key: string
  accessor: string
  className: string
  sortable: boolean
}

const TextAlign = {
  LEFT: 'align-left',
  CENTER: 'align-center',
  RIGHT: 'align-right'
}

const COLUMNS:Array<ColumnType> = [
  {
    key: 'name',
    accessor: 'name',
    className: TextAlign.LEFT,
    sortable: true
  },
  {
    key: 'locationNo',
    accessor: 'location',
    className: TextAlign.LEFT,
    sortable: true
  },
  {
    key: 'chargers',
    accessor: 'chargers',
    className: TextAlign.CENTER,
    sortable: false
  },
  {
    key: 'country',
    accessor: 'country',
    className: TextAlign.CENTER,
    sortable: false
  },
  {
    key: 'updatedAt',
    accessor: 'lastUpdated',
    className: TextAlign.CENTER,
    sortable: true
  },
  {
    key: 'actions',
    accessor: '',
    className: TextAlign.RIGHT,
    sortable: false
  }
];

const defaultProps = {
  fetchedData: {
    locations: {
      data: [],
      meta: {}
    }
  }
}

const DefaultLimit = 5;

const DefaultSortValue = "name:ASC";

const DefaultFetchVariables = {
  pagination: {
    page: 1,
    pageSize: DefaultLimit
  },
  sort: [DefaultSortValue]
};

export default {
  COLUMNS,
  DefaultFetchVariables,
  DefaultLimit,
  defaultProps,
  TextAlign
}
