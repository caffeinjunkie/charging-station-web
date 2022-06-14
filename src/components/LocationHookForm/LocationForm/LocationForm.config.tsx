const locationFormConfig = {
  locationInputProps: [
    {
      name: 'LocationNameInput',
      maxLength: 25,
      rules: {
        required: 'ErrorMessage-LocationNameInput-Required-text'
      }
    },
    {
      name: 'LocationNoInput',
      maxLength: 6,
      rules: {
        required: 'ErrorMessage-LocationNoInput-Required-text',
        pattern: {
          value: /^(0|[1-9]\d*)(\.\d+)?$/,
          message: 'ErrorMessage-LocationNoInput-WrongPattern-text'
        }
      }
    }
  ],
  addressInputProps: [
    {
      name: 'CityInput',
      maxLength: 25,
      rules: {
        required: 'ErrorMessage-CityInput-Required-text'
      }
    },
    {
      name: 'PostalCodeInput',
      maxLength: 10,
      rules: {
        required: 'ErrorMessage-PostalCodeInput-Required-text'
      }
    },
    {
      name: 'CountryInput'
    }
  ]
}

export default {
  locationFormConfig
}
