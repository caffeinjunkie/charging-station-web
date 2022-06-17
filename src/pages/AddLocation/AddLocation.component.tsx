import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { isEmpty } from "lodash";

import { useForm } from "react-hook-form";
import type {
  Props,
  SaveChargerPayloadType,
  EditChargerPayloadType
} from './AddLocation.type';
import config from './AddLocation.config';
import { LocationHookForm } from '../../components/LocationHookForm';
import { useTranslation as translate } from '../../hooks/useTranslation';
import { BackButton } from '../../components/BackButton';
import Paths from '../../root/RootNavigation/Paths';
import { PopupMenu } from '../../components/PopupMenu';
import {
  StyledBackPopupContentContainer,
  StyledBackPopupContentText
} from './AddLocation.styles';

const { SCREEN_NAME, defaultOptions, defaultValues, cancelButtons } = config;

const AddLocation = (props: Props) => {
  const {
    navigate,
    handleSaveLocation,
    handleSaveCharger,
    handleUpdateCharger
  } = props;
  
  const {
    control,
    handleSubmit,
    setError,
    trigger,
    formState: { errors, isValid, isDirty }
  } = useForm({ ...defaultOptions, defaultValues });
  const [addedChargers, setAddedChargers] = React.useState([]);
  const [isBackPopupOpen, setIsBackPopupOpen] = React.useState(false);
  const isFormValid = isValid && isDirty;
  const submitArgs = {
    chargers: addedChargers,
    setError
  };
  
  const handleCancelBackButton = () => setIsBackPopupOpen(!isBackPopupOpen);
  
  const handleConfirmBackButton = () => navigate(Paths.Dashboard);
  
  const onBackButtonClick = () => {
    const showCancelConfirmation = isDirty || !isEmpty(addedChargers);
    if (showCancelConfirmation) {
      setIsBackPopupOpen(true);
      return
    }
    navigate(Paths.Dashboard);
  }
  
  const renderCancelPopupContent = () => (
    <StyledBackPopupContentContainer>
      <StyledBackPopupContentText>
        {translate('CancelPopup-cancelPopup-text')}
      </StyledBackPopupContentText>
    </StyledBackPopupContentContainer>
  )
  
  const renderCancelPopup = () => (
    <PopupMenu
      isOpen={isBackPopupOpen}
      screenName={SCREEN_NAME}
      name="Add"
      withButtons
      buttons={cancelButtons(handleConfirmBackButton, handleCancelBackButton)}
      renderContent={renderCancelPopupContent}
      withCloseButton
      onClickCloseButton={() => setIsBackPopupOpen(false)}
    />
  )
  
  return (
    <>
      <BackButton
        screenName={SCREEN_NAME}
        onClick={onBackButtonClick}
        />
      <LocationHookForm
        screenName={`${SCREEN_NAME}`}
        name="Add"
        locationTitle={translate(`${SCREEN_NAME}-addLocationForm-title`)}
        locationFormIcon={FaPlus}
        control={control}
        errors={errors}
        onSaveCharger={(payload: SaveChargerPayloadType) =>
          handleSaveCharger(payload, addedChargers, setAddedChargers
        )}
        onUpdateCharger={(payload: EditChargerPayloadType) =>
          handleUpdateCharger(payload, addedChargers, setAddedChargers
        )}
        trigger={trigger}
        isValid={isFormValid}
        tableData={addedChargers}
        setTableData={setAddedChargers}
        onSaveButtonClick={handleSubmit((values: any) => handleSaveLocation(values, submitArgs))}
        {...props}
      />
      {renderCancelPopup()}
    </>
  )
}

export default AddLocation;
