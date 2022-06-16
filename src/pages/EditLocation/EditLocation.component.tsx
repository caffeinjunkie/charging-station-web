import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

import { Props } from './EditLocation.type';
import config from './EditLocation.config';
import { LocationHookForm } from '../../components/LocationHookForm';
import BackButton from '../../components/BackButton/BackButton';
import Paths from '../../root/RootNavigation/Paths';
import { StyledBackPopupContentContainer, StyledBackPopupContentText } from '../AddLocation/AddLocation.styles';
import { useTranslation as translate } from '../../hooks/useTranslation';
import { PopupMenu } from '../../components/PopupMenu';

const { SCREEN_NAME, defaultOptions, cancelButtons } = config;

const EditLocation = (props: Props) => {
  const {
    navigate,
    mapHookFormDefaultValues,
    mapPayload,
    handleRemoveLocation,
    handleSaveLocation
  } = props;
  const formOptions = mapHookFormDefaultValues();
  const {
    control,
    handleSubmit,
    setError,
    trigger,
    formState: { errors, isValid, isDirty }
  } = useForm({ ...defaultOptions, ...formOptions });
  const { chargers } = mapPayload();
  const [addedChargers, setAddedChargers] = React.useState(chargers);
  const [isBackPopupOpen, setIsBackPopupOpen] = React.useState(false);
  const [isRemovePopupOpen, setIsRemovePopupOpen] = React.useState(false);
  // checking length change to is edited
  const hasDataChanged = chargers.length !== addedChargers.length;
  const isFormValid = isValid && (isDirty || hasDataChanged);
  const submitArgs = {
    chargers: addedChargers,
    setError
  };
  
  const handleCancelButton = () => {
    setIsBackPopupOpen(false);
    setIsRemovePopupOpen(false);
  }
  
  const handleConfirmBackButton = () => navigate(Paths.Dashboard);
  
  const onBackButtonClick = () => {
    const showCancelConfirmation = isDirty || hasDataChanged;
    if (showCancelConfirmation) {
      setIsBackPopupOpen(true);
      return
    }
    navigate(Paths.Dashboard);
  }
  
  const renderCancelPopupContent = (name: string) => (
    <StyledBackPopupContentContainer>
      <StyledBackPopupContentText>
        {translate(`CancelPopup-${name}Popup-text`)}
      </StyledBackPopupContentText>
    </StyledBackPopupContentContainer>
  )
  
  const renderCancelPopup = () => (
    <PopupMenu
      isOpen={isBackPopupOpen}
      screenName={SCREEN_NAME}
      name="Edit"
      withButtons
      buttons={cancelButtons(handleConfirmBackButton, handleCancelButton)}
      renderContent={() => renderCancelPopupContent('cancel')}
      withCloseButton
      onClickCloseButton={() => setIsBackPopupOpen(false)}
    />
  )
  
  const renderRemovePopup = () => (
    <PopupMenu
      isOpen={isRemovePopupOpen}
      screenName={SCREEN_NAME}
      name="Edit"
      withButtons
      buttons={cancelButtons(handleRemoveLocation, handleCancelButton)}
      renderContent={() => renderCancelPopupContent('remove')}
      withCloseButton
      onClickCloseButton={() => setIsRemovePopupOpen(false)}
    />
  )
  
  return (
    <>
      <BackButton onClick={onBackButtonClick} />
      <LocationHookForm
        screenName={SCREEN_NAME}
        name="Edit"
        locationTitle={formOptions.defaultValues.name}
        locationFormIcon={FaMapMarkerAlt}
        formOptions={formOptions}
        control={control}
        errors={errors}
        trigger={trigger}
        isValid={isFormValid}
        tableData={addedChargers}
        setTableData={setAddedChargers}
        onSaveButtonClick={handleSubmit((values: any) => handleSaveLocation(values, submitArgs))}
        onRemoveButtonClick={() => setIsRemovePopupOpen(true)}
        {...props}
      />
      {renderCancelPopup()}
      {renderRemovePopup()}
    </>
  )
}

EditLocation.defaultProps = config.defaultProps;

export default EditLocation;
