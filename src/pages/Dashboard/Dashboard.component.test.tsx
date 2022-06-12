import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Dashboard from './Dashboard.component';

describe('Dashboard', () => {
  let wrapper: ShallowWrapper;
  const props = {
    navigate: jest.fn(),
    prepareDataForTable: jest.fn()
  }

  beforeEach(() => {
    wrapper = shallow(<Dashboard {...props} />)
  });

  describe('#render', () => {
    it('should render locations text', () => {
      const locationsTextTestId = 'Dashboard_LocationListTitle_Text';
      const locationsText = wrapper.find({ id: locationsTextTestId })
    
      expect(locationsText).toHaveLength(1);
    });
  
    it('should render add location button', () => {
      const addLocationButtonTestId = 'Dashboard_AddLocation_Button';
      const addLocationButton = wrapper.find({ id: addLocationButtonTestId })
    
      expect(addLocationButton).toHaveLength(1);
    });
  
    it('should render Table component', () => {
      const tableComponent = wrapper.find('Table')
    
      expect(tableComponent).toHaveLength(1);
    });
  });
  
  describe('onClick', () => {
    it('should call navigate to add location when add location button is pressed', () => {
      const addLocationButtonTestId = 'Dashboard_AddLocation_Button';
      const addLocationButton = wrapper.find({ id: addLocationButtonTestId })
      
      addLocationButton.simulate('click');
      
      expect(props.navigate).toHaveBeenCalledWith('/add-location')
    });
  });
});
