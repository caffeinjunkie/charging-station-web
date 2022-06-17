import type { ChargerTypeType } from '../ChargersTable/ChargersTable.type';

const statusOptions = [
  {
    name: "CONNECTED"
  },
  {
    name: "NOT_CONNECTED"
  },
  {
    name: "REMOVED"
  }
];

const defaultProps = {
  screenName: ''
}

const chargerFormProps = (typeOptions: Array<ChargerTypeType>) => [
  {
    name: 'status',
    isDropdown: true,
    options: statusOptions,
    rules: {
      required: true
    }
  },
  {
    name: 'type',
    isDropdown: true,
    options: typeOptions,
    rules: {
      required: true
    }
  },
  {
    name: 'serialNumber',
    maxLength: 9,
    rules: {
      required: 'ErrorMessage-serialNumber-required-text',
      minLength: {
        value: 9,
        message: 'ErrorMessage-serialNumber-minimum-text'
      }
    }
  }
]

export default {
  chargerFormProps,
  defaultProps,
  statusOptions
}
