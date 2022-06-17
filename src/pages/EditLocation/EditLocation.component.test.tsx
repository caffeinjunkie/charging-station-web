import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import EditLocation from './EditLocation.component';
import { netherlands, switzerland } from '../../fixtures/countryData.fixture';
import { charger1, charger2, hpc, t52 } from '../../fixtures/chargerData.fixture';
import { locationData } from '../../fixtures/locationData.fixture';
import { BackButton } from '../../components/BackButton';
import { LocationHookForm } from '../../components/LocationHookForm';

describe('EditLocation', () => {
  let wrapper: ShallowWrapper;
  const fetchedData = {
    countries: {
      data: [netherlands, switzerland]
    },
    chargerTypes: {
      data: [hpc, t52]
    },
    location: {
      data: locationData
    }
  }
  const chargers = [charger1, charger2];
  const defaultValues = {
    name: '',
    locationNo: ''
  }
  
  const props = {
    navigate: jest.fn(),
    mapCountries: jest.fn(),
    mapChargerTypes: jest.fn(),
    handleSaveLocation: jest.fn(),
    handleUpdateCharger: jest.fn(),
    handleBackButtonClick: jest.fn(),
    handleSaveCharger: jest.fn(),
    handleRemoveLocation: jest.fn(),
    mapHookFormDefaultValues: jest.fn(),
    mapPayload: jest.fn(),
    fetchedData
  }
  
  beforeEach(() => {
    props.mapPayload.mockReturnValue({ chargers })
    props.mapHookFormDefaultValues.mockReturnValue({ defaultValues })
    wrapper = shallow(<EditLocation {...props} />)
  });
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  describe('#render', () => {
    it('should render back button', () => {
      const backButton = wrapper.find(BackButton);
      
      expect(backButton).toHaveLength(1);
    });
  
    it('should render LocationHookForm', () => {
      const locationHookForm = wrapper.find(LocationHookForm);
    
      expect(locationHookForm).toHaveLength(1);
    });
  
    it('should render cancel popup', () => {
      const cancelPopup = wrapper.find({ id: 'EditLocation_CancelPopup' });
    
      expect(cancelPopup).toHaveLength(1);
      expect(cancelPopup.props().isOpen).toEqual(false);
    });
  
    it('should render remove popup', () => {
      const removePopup = wrapper.find({ id: 'EditLocation_RemovePopup' });
    
      expect(removePopup).toHaveLength(1);
      expect(removePopup.props().isOpen).toEqual(false);
    });
  });
  
  describe('#onClick', () => {
    it('should navigate to dashboard when back button is clicked', () => {
      const backButton = wrapper.find(BackButton);
      
      backButton.simulate('click');
      
      expect(props.navigate).toHaveBeenCalledWith('/')
    });
  
    it('should call handleSaveCharger with params when save charger is clicked', () => {
      const payload = {
        type: 'HPC',
        status: 'CONNECTED',
        serialNumber: 'BB1144144'
      };
      const setAddedCharger = expect.any(Function)
      const locationHookForm = wrapper.find(LocationHookForm);
    
      locationHookForm.simulate('saveCharger', payload);
    
      expect(props.handleSaveCharger).toHaveBeenCalledWith(payload, chargers, setAddedCharger);
    });
  
    it('should call handleUpdateCharger with params when update charger is clicked', () => {
      const payload = {
        type: 'HPC',
        status: 'CONNECTED',
        serialNumber: 'BB1144144'
      };
      const setAddedCharger = expect.any(Function)
      const locationHookForm = wrapper.find(LocationHookForm);
    
      locationHookForm.simulate('updateCharger', payload);
    
      expect(props.handleUpdateCharger).toHaveBeenCalledWith(payload, chargers, setAddedCharger);
    });
  
    it('should make remove popup visible when onRemoveButtonClick is clicked', () => {
      const locationHookForm = wrapper.find(LocationHookForm);
    
      locationHookForm.simulate('removeButtonClick');
      wrapper.update();
      const removePopup = wrapper.find({ id: 'EditLocation_RemovePopup' });
      
      expect(removePopup.props().isOpen).toEqual(true);
    });
  
    it('should make remove popup hidden when onClickCloseButton is clicked', () => {
      const locationHookForm = wrapper.find(LocationHookForm);
    
      locationHookForm.simulate('removeButtonClick');
      wrapper.update();
      const removePopup = wrapper.find({ id: 'EditLocation_RemovePopup' });
      removePopup.simulate('clickCloseButton');
      wrapper.update();
      const renderedRemovePopup = wrapper.find({ id: 'EditLocation_RemovePopup' });
    
      expect(renderedRemovePopup.props().isOpen).toEqual(false);
    });
  });
});
