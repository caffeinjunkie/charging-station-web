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
import { BackButton } from '../../components/BackButton';
import Paths from '../../root/RootNavigation/Paths';
import { StyledBackPopupContentContainer, StyledBackPopupContentText } from './EditLocation.styles';
import { useTranslation as translate } from '../../hooks/useTranslation';
import { PopupMenu } from '../../components/PopupMenu';
import { TestUtils } from '../../utils';

const { SCREEN_NAME, defaultOptions, cancelButtons } = config;
const { testProps } = TestUtils;

const EditLocation = (props: Props) => {
  const {
    navigate,
    mapHookFormDefaultValues,
    mapPayload,
    handleUpdateCharger,
    handleBackButtonClick,
    handleRemoveLocation,
    handleSaveCharger,
    handleSaveLocation
  } = props;
  const formOptions = mapHookFormDefaultValues();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid, isDirty }
  } = useForm({ ...defaultOptions, ...formOptions });
  const { chargers } = mapPayload();
  const [addedChargers, setAddedChargers] = React.useState(chargers);
  const [deletedChargers, setDeletedChargers] = React.useState([]);
  const [isBackPopupOpen, setIsBackPopupOpen] = React.useState(false);
  const [isRemovePopupOpen, setIsRemovePopupOpen] = React.useState(false);
  const isFormValid = isValid && (isDirty || addedChargers.length !== chargers.length);
  const submitArgs = {
    chargers: addedChargers,
    deletedChargers,
    setError
  };
  
  const handleCancelButton = () => {
    setIsBackPopupOpen(false);
    setIsRemovePopupOpen(false);
  }
  
  const handleConfirmBackButton = () => {
    handleBackButtonClick(addedChargers);
  }
  
  const onBackButtonClick = () => {
    const chargerListHasChange = addedChargers.length !== chargers.length;
    if (isDirty || chargerListHasChange) {
      setIsBackPopupOpen(true);
      return
    }
    navigate(Paths.Dashboard);
  }
  
  const renderCancelPopupContent = (name: string) => (
    <StyledBackPopupContentContainer
      {...testProps(`${SCREEN_NAME}_${name}Popup_Content`)}
    >
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
      {...testProps(`${SCREEN_NAME}_CancelPopup`)}
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
      {...testProps(`${SCREEN_NAME}_RemovePopup`)}
    />
  )
  
  return (
    <>
      <BackButton
        screenName={SCREEN_NAME}
        onClick={onBackButtonClick}
      />
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
        isValid={isFormValid}
        tableData={addedChargers}
        setTableData={setAddedChargers}
        setDeletedChargers={setDeletedChargers}
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
