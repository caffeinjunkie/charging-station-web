import { useTranslation as translate } from "../../hooks/useTranslation";

const defaultProps = {
  location: {},
  tableData: [],
  formOptions: {}
}

const chargerPopupButtons = (handleSaveButtonClick: Function, handleCancelButtonClick: Function) => [
  {
    text: translate('LocationHookForm-saveButton-text'),
    onClick: handleSaveButtonClick,
    className: 'primary',
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

export default { defaultProps, EDIT_LOCATION_PAGE, chargerPopupButtons };
