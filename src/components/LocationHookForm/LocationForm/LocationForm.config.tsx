const locationFormConfig = {
  locationInputProps: [
    {
      name: 'name',
      maxLength: 25,
      rules: {
        required: 'ErrorMessage-name-required-text'
      }
    },
    {
      name: 'locationNo',
      maxLength: 6,
      rules: {
        required: 'ErrorMessage-locationNo-required-text',
        pattern: {
          value: /^(0|[1-9]\d*)(\.\d+)?$/,
          message: 'ErrorMessage-locationNo-wrongPattern-text'
        },
        minLength: {
          value: 6,
          message: 'ErrorMessage-locationNo-minimum-text'
        }
      }
    }
  ],
  addressInputProps: [
    {
      name: 'city',
      maxLength: 25,
      rules: {
        required: 'ErrorMessage-city-required-text'
      }
    },
    {
      name: 'postalCode',
      maxLength: 10,
      rules: {
        required: 'ErrorMessage-postalCode-required-text'
      }
    },
    {
      name: 'country',
      rules: {
        required: true
      },
      isDropdown: true
    }
  ]
}

const defaultProps = {
  screenName: '',
  listOfCountries: []
}

export default {
  locationFormConfig,
  defaultProps
}
