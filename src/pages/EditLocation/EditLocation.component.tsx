import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

import type {
  EditChargerPayloadType,
  Props,
  SaveChargerPayloadType
} from './EditLocation.type';
import config from './EditLocation.config';
import { LocationHookForm } from '../../components/LocationHookForm';
import BackButton from '../../components/BackButton/BackButton';
import Paths from '../../root/RootNavigation/Paths';
import { StyledBackPopupContentContainer, StyledBackPopupContentText } from './EditLocation.styles';
import { useTranslation as translate } from '../../hooks/useTranslation';
import { PopupMenu } from '../../components/PopupMenu';

const { SCREEN_NAME, defaultOptions, cancelButtons } = config;

const EditLocation = (props: Props) => {
  const {
    navigate,
    mapHookFormDefaultValues,
    mapPayload,
    handleUpdateCharger,
    handleRemoveLocation,
    handleSaveCharger,
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
  const isFormValid = isValid && (isDirty || addedChargers.length !== chargers.length);
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
    if (isDirty) {
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
        onSaveCharger={(payload: SaveChargerPayloadType) =>
          handleSaveCharger(payload, addedChargers, setAddedChargers)
        }
        onUpdateCharger={(payload: EditChargerPayloadType) =>
          handleUpdateCharger(payload, addedChargers, setAddedChargers)
        }
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
