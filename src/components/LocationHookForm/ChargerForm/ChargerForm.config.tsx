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

const chargerFormProps = (typeOptions: Array<ChargerTypeType>) => [
  {
    name: 'status',
    isDropdown: true,
    options: statusOptions
  },
  {
    name: 'type',
    isDropdown: true,
    options: typeOptions
  },
  {
    name: 'serialNumber',
    maxLength: 9,
    rules: {
      required: 'ErrorMessage-serialNumber-required-text',
      minLength: {
        value: 6,
        message: 'ErrorMessage-serialNumber-minimum-text'
      }
    }
  }
]

const defaultProps = {
  screenName: '',
  listOfChargerType: [],
  defaultChargerFormValues: null
}

const defaultValuesConfig = (listOfChargerType: Array<ChargerTypeType>) => ({
  type: listOfChargerType[0],
  status: statusOptions[0],
  serialNumber: ''
})

const defaultOptions: any = {
  mode: 'all'
}

export default {
  chargerFormProps,
  defaultProps,
  statusOptions,
  defaultValuesConfig,
  defaultOptions
}
