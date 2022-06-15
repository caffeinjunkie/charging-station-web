import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Dashboard from './Dashboard.component';
import { locationMockData } from '../../fixtures/locationData';

describe('Dashboard', () => {
  let wrapper: ShallowWrapper;
  const fetchedData = {
    locations: {
      data: [{
        id: 1,
        attributes: locationMockData
      }],
      meta: {
        pagination: {
          page: 1,
          pageCount: 2
        }
      }
    }
  };
  const prepareTableData = jest.fn()
  const refetch = jest.fn()
  const getTableNavigationProps = jest.fn()
  const onClick = jest.fn()
  const defaultTableNavigationProps = {
    next: {
      disabled: false,
      onClick
    },
    previous: {
      disabled: true,
      onClick
    }
  };
  
  const props = {
    navigate: jest.fn(),
    refetch,
    fetchedData,
    prepareTableData,
    getTableNavigationProps
  }

  beforeEach(() => {
    getTableNavigationProps.mockReturnValue(defaultTableNavigationProps)
    wrapper = shallow(<Dashboard {...props} />);
  });
  
  afterEach(() => {
    jest.clearAllMocks();
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
  
    it('should render Table with tableNavigationProps', () => {
      const tableComponent = wrapper.find('Table');
      const { tableNavigationProps }: any = tableComponent.props();
      const expectedTableNavigationProps = {
        next: {
          disabled: false,
          onClick: expect.any(Function)
        },
        previous: {
          disabled: true,
          onClick: expect.any(Function)
        }
      };
      
      expect(tableNavigationProps).toEqual(expectedTableNavigationProps)
      
    });
  });
  
  describe('onClick', () => {
    let tableComponent: any;
    
    beforeEach(() => {
      tableComponent = wrapper.find('Table');
    });
    
    it('should call navigate to add location when add location button is clicked', () => {
      const addLocationButtonTestId = 'Dashboard_AddLocation_Button';
      const addLocationButton = wrapper.find({ id: addLocationButtonTestId })
      
      addLocationButton.simulate('click');
      
      expect(props.navigate).toHaveBeenCalledWith('/locations')
    });
  
    it('should call onClick when next button is clicked', () => {
      const {  tableNavigationProps: { next: nextButton } }: any = tableComponent.props()
      
      nextButton.onClick();
      
      expect(onClick).toHaveBeenCalled();
    });
  
    it('should call onClick when previousButton button is clicked', () => {
      const {  tableNavigationProps: { previous: previousButton } }: any = tableComponent.props()
    
      previousButton.onClick();
    
      expect(onClick).toHaveBeenCalled();
    });
  });
});
