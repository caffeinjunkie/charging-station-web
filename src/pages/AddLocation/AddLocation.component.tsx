import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { isEmpty } from "lodash";

import { useForm } from "react-hook-form";
import { Props } from './AddLocation.type';
import config from './AddLocation.config';
import { LocationHookForm } from '../../components/LocationHookForm';
import { useTranslation as translate } from '../../hooks/useTranslation';
import BackButton from "../../components/BackButton/BackButton";
import Paths from '../../root/RootNavigation/Paths';
import { PopupMenu } from "../../components/PopupMenu";

const { SCREEN_NAME, defaultOptions, defaultValues, cancelButtons } = config;

const AddLocation = (props: Props) => {
  const {
    navigate,
    handleSaveLocation
  } = props;
  
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid, isDirty }
  } = useForm({ ...defaultOptions, defaultValues });
  const [addedChargers, setAddedChargers] = React.useState([]);
  const [isBackPopupOpen, setIsBackPopupOpen] = React.useState(false);
  const isFormValid = isValid && isDirty;
  
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
  
  const renderCancelPopup = () => (
    <PopupMenu
      isOpen={isBackPopupOpen}
      screenName={SCREEN_NAME}
      name="Add"
      withButtons
      buttons={cancelButtons(handleConfirmBackButton, handleCancelBackButton)}
      renderContent={() => <div>aaa</div>}
      withCloseButton
      onClickCloseButton={() => setIsBackPopupOpen(false)}
    />
  )
  
  return (
    <>
      <BackButton onClick={onBackButtonClick} />
      <LocationHookForm
        screenName={`${SCREEN_NAME}`}
        name="Add"
        locationTitle={translate(`${SCREEN_NAME}-addLocationForm-title`)}
        locationFormIcon={FaPlus}
        control={control}
        errors={errors}
        isValid={isFormValid}
        onSaveButtonClick={handleSubmit((values: any) => handleSaveLocation(values, setError))}
        {...props}
      />
      {renderCancelPopup()}
    </>
  )
}

export default AddLocation;
