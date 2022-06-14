const defaultProps = {
  value: '',
  type: 'text',
  disabled: false,
  autoComplete: 'off',
  informationText: '',
  maxLength: null,
  isNumeric: false
};

const removeNonNumericChars = (value: string): string => (
  !value ? value : value.replace(/[\D]/g, '')
);

export default { defaultProps, removeNonNumericChars };
