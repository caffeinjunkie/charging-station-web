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
    handleSaveLocation
  } = props;
  const formOptions = mapHookFormDefaultValues();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid, isDirty }
  } = useForm({ ...defaultOptions, ...formOptions });
  const [addedChargers, setAddedChargers] = React.useState([]);
  const [isBackPopupOpen, setIsBackPopupOpen] = React.useState(false);
  const isFormValid = isValid && isDirty;
  
  const handleCancelBackButton = () => setIsBackPopupOpen(!isBackPopupOpen);
  
  const handleConfirmBackButton = () => navigate(Paths.Dashboard);
  
  const onBackButtonClick = () => {
    if (isDirty) {
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
      <BackButton onClick={onBackButtonClick} />
      <LocationHookForm
        screenName={SCREEN_NAME}
        name="Edit"
        locationTitle={formOptions.defaultValues.name}
        locationFormIcon={FaMapMarkerAlt}
        formOptions={formOptions}
        control={control}
        errors={errors}
        isValid={isFormValid}
        onSaveButtonClick={handleSubmit((values: any) => handleSaveLocation(values, setError))}
        onRemoveButtonClick={() => {}}
        {...props}
      />
      {renderCancelPopup()}
    </>
  )
}

export default EditLocation;
