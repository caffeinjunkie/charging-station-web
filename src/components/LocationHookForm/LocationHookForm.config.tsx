const defaultProps = {
  location: {},
  chargers: []
}

const formConfig: any = () => (
  {
    options: {
      defaultValues: {
        companyId: '',
        dailyLimit: ''
      },
      mode: 'all'
    },
    rules: {
      companyId: {
        required: 'required message',
        pattern: {
          value: /^(?=.*\d)(?=.*[A-Z])([A-Z0-9]+){8,36}$/i,
          message: 'wrong pattern message'
        }
      },
      dailyLimit: {
        required: 'required message',
        min: {
          value: 0,
          message: 'wrong pattern message'
        }
      }
    },
    reValidateMode: 'onChange'
  }
);

export default { defaultProps, formConfig };
