import React from 'react';
import { FaBolt, FaPlus, FaSave } from 'react-icons/fa';
import { GoX } from 'react-icons/go';
import { useForm } from 'react-hook-form';
import { isEmpty } from "lodash";

import type { ChargerType, Props } from './LocationHookForm.type';
import {
  StyledContainer,
  StyledFooterButtonContainer,
  StyledChargerPopupContainer
} from './LocationHookForm.styles';
import { LocationForm } from './LocationForm';
import { CardView } from '../CardView';
import { useTranslation as translate } from '../../hooks/useTranslation';
import config from './LocationHookForm.config';
import { Button } from '../Button';
import { TestUtils } from '../../utils';
import { ChargersTable } from "./ChargersTable";
import { PopupMenu } from "../PopupMenu";
import ChargerForm from "./ChargerForm/ChargerForm.component";

const {
  EDIT_LOCATION_PAGE,
  chargerPopupButtons,
  defaultOptions
} = config;
const { testProps } = TestUtils;

const LocationHookForm = (props: Props) => {
  const {
    mapCountries,
    mapChargerTypes,
    screenName,
    name,
    locationFormIcon,
    onSaveCharger,
    onUpdateCharger,
    locationTitle,
    onSaveButtonClick,
    tableData,
    setTableData,
    onRemoveButtonClick,
    isValid,
    errors,
    control
  } = props;
  const isEditLocationPage = screenName === EDIT_LOCATION_PAGE;
  const [isAddChargerPopupOpen, setIsAddChargerPopupOpen] = React.useState(false)
  const [isEditChargerPopupOpen, setIsEditChargerPopupOpen] = React.useState(false)
  const [selectedChargerId, setSelectedChargerId] = React.useState("");
  const [currentCharger, setCurrentCharger]: any = React.useState();
  const {
    control: chargerControl,
    reset,
    getValues,
    setValue,
    formState: { errors: chargerErrors, isValid: isChargerValid, isDirty }
  } = useForm({ ...defaultOptions });
  const isSaveChargerButtonValid = isChargerValid && isDirty;
  
  React.useEffect(() => {
    if (!isEmpty(currentCharger)) {
      const { serialNumber } = currentCharger;
      setValue('serialNumber', serialNumber)
    }
  }, [currentCharger]);
  
  const handleCancelEditPopupClick = () => {
    setIsEditChargerPopupOpen(false);
    setSelectedChargerId("");
    reset();
  }
  
  const handleAddCancelPopupClick = () => {
    setIsAddChargerPopupOpen(false);
    reset();
  }
  
  const handleSaveEditedCharger = () => {
    const updatePayload = {
      id: selectedChargerId,
      type: getValues('type'),
      status: getValues('status'),
      serialNumber: getValues('serialNumber')
    }
    onUpdateCharger(updatePayload)
    setIsEditChargerPopupOpen(false);
    reset();
  }
  
  const handleSaveAddedCharger = () => {
    const savePayload = {
      type: getValues('type'),
      status: getValues('status'),
      serialNumber: getValues('serialNumber')
    }
    onSaveCharger(savePayload)
    setIsAddChargerPopupOpen(false);
    reset();
  }
  
  const handleEditButtonClick = (selectedCharger: ChargerType) => {
    setSelectedChargerId(selectedCharger.id.toString());
    setCurrentCharger(selectedCharger);
    setIsEditChargerPopupOpen(true);
  }
  
  const removeDeletedItemFromData = (deletedItem: ChargerType) => {
    const filteredData = tableData.filter((charger: ChargerType) => charger.id !== deletedItem.id);
    setTableData(filteredData);
  }
  
  const renderLocationForm = () => (
    <LocationForm
      control={control}
      screenName={screenName}
      errors={errors}
      listOfCountries={mapCountries()}
    />
  )
  
  const renderSaveButton = () => (
    <Button
      screenName={screenName}
      name={name}
      disabled={!isValid}
      text={translate(`${screenName}-saveButton-text`)}
      className="primary flex-end"
      renderIcon={FaSave}
      onClick={onSaveButtonClick}
      {...testProps(`${screenName}_${name}Location_SaveButton`)}
    />
  )
  
  const renderRemoveButton = () => (
    <Button
      screenName={screenName}
      name={name}
      text={translate(`${screenName}-removeButton-text`)}
      className="secondary flex-start"
      renderIcon={GoX}
      onClick={onRemoveButtonClick}
      {...testProps(`${screenName}_${name}Location_SaveButton`)}
    />
  )
  
  const renderChargerCardHeaderButton = () => (
    <Button
      screenName={screenName}
      name={name}
      text={translate('LocationHookForm-addCharger-text')}
      className="primary"
      renderIcon={FaPlus}
      onClick={() => setIsAddChargerPopupOpen(true)}
      {...testProps(`${screenName}_${name}Location_SaveButton`)}
    />
  )
  
  const renderChargersTable = () => (
    <ChargersTable
      screenName={screenName}
      data={tableData}
      onClickEdit={handleEditButtonClick}
      onClickDelete={removeDeletedItemFromData}
    />
  )
  
  const renderChargerPopupContent = () => (
    <StyledChargerPopupContainer>
      <ChargerForm
        control={chargerControl}
        errors={chargerErrors}
        screenName={screenName}
        listOfChargerType={mapChargerTypes()}
       />
    </StyledChargerPopupContainer>
  )
  
  const renderAddChargerPopup = () => (
    <PopupMenu
      isOpen={isAddChargerPopupOpen}
      screenName={screenName}
      title={translate('LocationHookForm-addCharger-title')}
      name="AddCharger"
      withCloseButton
      withButtons
      buttons={chargerPopupButtons(handleSaveAddedCharger, handleAddCancelPopupClick, !isSaveChargerButtonValid)}
      onClickCloseButton={() => setIsAddChargerPopupOpen(false)}
      renderContent={renderChargerPopupContent}
    />
  )
  
  const renderEditChargerPopup = () => (
    <PopupMenu
      isOpen={isEditChargerPopupOpen}
      screenName={screenName}
      title={translate('LocationHookForm-editCharger-title')}
      name="EditCharger"
      withCloseButton
      withButtons
      buttons={chargerPopupButtons(handleSaveEditedCharger, handleCancelEditPopupClick, !isSaveChargerButtonValid)}
      onClickCloseButton={() => setIsEditChargerPopupOpen(false)}
      renderContent={renderChargerPopupContent}
    />
  )
  
  return (
    <StyledContainer>
      <CardView
        screenName={screenName}
        renderIcon={locationFormIcon}
        title={locationTitle}
        renderContent={renderLocationForm}
        name={`${name}Location`}
        key={`${name}Location`}
      />
      <CardView
        screenName={screenName}
        renderIcon={() => <FaBolt />}
        title={translate('LocationHookForm-chargersForm-title')}
        renderContent={renderChargersTable}
        withHeaderButton
        renderHeaderButton={renderChargerCardHeaderButton}
        name={`${name}Chargers`}
        key={`${name}Chargers`}
      />
      <StyledFooterButtonContainer
        className={name.toLowerCase()}
      >
        {isEditLocationPage && renderRemoveButton()}
        {renderSaveButton()}
      </StyledFooterButtonContainer>
      {renderAddChargerPopup()}
      {renderEditChargerPopup()}
    </StyledContainer>
  )
}

LocationHookForm.defaultProps = config.defaultProps;

export default LocationHookForm;
