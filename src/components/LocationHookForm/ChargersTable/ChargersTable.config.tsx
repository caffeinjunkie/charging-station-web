import type { ChargerType } from './ChargersTable.type';
import { TimeUtil } from '../../../utils';

const { transformDateToLocaleFormat } = TimeUtil;

interface ColumnType {
  key: string
  accessor: string,
  className: string
}

const TextAlign = {
  LEFT: 'align-left',
  RIGHT: 'align-right'
}

const COLUMNS:Array<ColumnType> = [
  {
    key: 'id',
    accessor: 'id',
    className: TextAlign.LEFT
  },
  {
    key: 'type',
    accessor: 'type',
    className: TextAlign.LEFT
  },
  {
    key: 'serialNumber',
    accessor: 'serialNumber',
    className: TextAlign.LEFT
  },
  {
    key: 'status',
    accessor: 'status',
    className: TextAlign.LEFT
  },
  {
    key: 'updatedAt',
    accessor: 'updatedAt',
    className: TextAlign.LEFT
  },
  {
    key: 'actions',
    accessor: '',
    className: TextAlign.RIGHT
  }
];

const defaultProps = {
  data: []
}

const mappedChargerData = (data: Array<ChargerType>, renderActionButtons: Function) =>
data.map((charger) => ({
  id: {
    value: charger.id,
    className: TextAlign.LEFT
  },
  type: {
    value: charger.type,
    className: TextAlign.LEFT
  },
  serialNumber: {
    value: charger.serialNumber.replace(new RegExp(`.{${  3  }}(?=.)`, 'g'), '$&-'),
    className: TextAlign.LEFT
  },
  status: {
    value: charger.status,
    className: `${TextAlign.LEFT} ${charger.status.toLowerCase()}`
  },
  updatedAt: {
    value: transformDateToLocaleFormat(charger.updatedAt),
    className: TextAlign.LEFT
  },
  actions: {
    value: renderActionButtons(charger),
    className: TextAlign.RIGHT
  }
}))

export default {
  COLUMNS,
  defaultProps,
  mappedChargerData
}
