import { useTranslation as translate } from '../../hooks/useTranslation';

const SCREEN_NAME = "AddLocation";

const defaultValues = {
  name: '',
  locationNo: '',
  city: '',
  postalCode: ''
}

const defaultOptions: any = {
  mode: 'all'
}

const cancelButtons = (handleConfirmBackButton: Function, handleCancelBackButton: Function) => [
  {
    text: translate('CancelPopup-cancelPopup-confirmationButton-text'),
    onClick: handleConfirmBackButton,
    className: 'secondary',
    name: 'ConfirmationPopup'
  },
  {
    text: translate('CancelPopup-cancelPopup-cancelButton-text'),
    onClick: handleCancelBackButton,
    className: 'primary',
    name: 'CancelPopup'
  }
];

export default {
  SCREEN_NAME,
  defaultOptions,
  defaultValues,
  cancelButtons
};
