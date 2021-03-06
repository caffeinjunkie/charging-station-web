interface ColumnType {
  key: string
  accessor: string,
  className: string
}

const TextAlign = {
  LEFT: 'align-left',
  CENTER: 'align-center',
  RIGHT: 'align-right'
}

const COLUMNS:Array<ColumnType> = [
  {
    key: 'Location',
    accessor: 'name',
    className: TextAlign.LEFT
  },
  {
    key: 'LocationNo',
    accessor: 'location',
    className: TextAlign.LEFT
  },
  {
    key: 'Chargers',
    accessor: 'chargers',
    className: TextAlign.CENTER
  },
  {
    key: 'Country',
    accessor: 'country',
    className: TextAlign.CENTER
  },
  {
    key: 'LastUpdated',
    accessor: 'lastUpdated',
    className: TextAlign.CENTER
  },
  {
    key: 'Actions',
    accessor: '',
    className: TextAlign.RIGHT
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
