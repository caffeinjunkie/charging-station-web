import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import AddLocation from './AddLocation.component';
import { netherlands, switzerland } from '../../fixtures/countryData.fixture';
import { hpc, t52 } from '../../fixtures/chargerData.fixture';
import { locationData } from '../../fixtures/locationData.fixture';
import { BackButton } from '../../components/BackButton';
import { LocationHookForm } from '../../components/LocationHookForm';

describe('AddLocation', () => {
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
  const props = {
    navigate: jest.fn(),
    mapCountries: jest.fn(),
    handleUpdateCharger: jest.fn(),
    mapChargerTypes: jest.fn(),
    handleSaveLocation: jest.fn(),
    handleBackButtonClick: jest.fn(),
    handleSaveCharger: jest.fn(),
    fetchedData
  }
  
  beforeEach(() => {
    wrapper = shallow(<AddLocation {...props} />)
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
      const cancelPopup = wrapper.find({ id: 'AddLocation_CancelPopup' });
    
      expect(cancelPopup).toHaveLength(1);
      expect(cancelPopup.props().isOpen).toEqual(false);
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
    
      expect(props.handleSaveCharger).toHaveBeenCalledWith(payload, [], setAddedCharger);
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
    
      expect(props.handleUpdateCharger).toHaveBeenCalledWith(payload, [], setAddedCharger);
    });
  });
});
