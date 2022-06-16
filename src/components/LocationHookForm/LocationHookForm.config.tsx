import { useTranslation as translate } from '../../hooks/useTranslation';

const defaultProps = {
  location: {},
  tableData: [],
  formOptions: {}
}

const chargerPopupButtons = (handleSaveButtonClick: Function, handleCancelButtonClick: Function, disabled: boolean) => [
  {
    text: translate('LocationHookForm-saveButton-text'),
    onClick: handleSaveButtonClick,
    className: 'primary',
    disabled,
    name: 'Save'
  },
  {
    text: translate('LocationHookForm-cancelButton-text'),
    onClick: handleCancelButtonClick,
    className: 'secondary',
    name: 'Cancel'
  }
];

const EDIT_LOCATION_PAGE = 'EditLocation';

const defaultOptions: any = {
  mode: 'all'
}

export default {
  defaultProps,
  EDIT_LOCATION_PAGE,
  chargerPopupButtons,
  defaultOptions
};
