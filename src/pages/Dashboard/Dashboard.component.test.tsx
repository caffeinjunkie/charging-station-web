import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Dashboard from './Dashboard.component';

describe('Dashboard', () => {
  let wrapper: ShallowWrapper;
  const fetchedResult = [
    {
      locationNo: 12323,
      name: 'MockLocation'
    }
  ];
  const result = {
    fetchedResult,
    isLoading: false,
    pagination: {
      pageCount: 2
    }
  };
  const prepareDataForTable = jest.fn()
  const refetch = jest.fn()
  const getTableNavigationProps = jest.fn()
  const props = {
    navigate: jest.fn(),
    refetch,
    prepareDataForTable,
    getTableNavigationProps
  }

  beforeEach(() => {
    prepareDataForTable.mockReturnValue(result)
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
  
    it('should render Table, next button enabled and prev button disabled', () => {
      const tableComponent = wrapper.find('Table');
      const {  tableNavigationProps: { next, previous } }: any = tableComponent.props()
    
      expect(next.disabled).toBeFalsy();
      expect(previous.disabled).toBeTruthy();
      expect(tableComponent).toHaveLength(1);
      
    });
  
    it('should call prepareDataForTable on render', () => {
      const renderEditButton = expect.any(Function)
      const currentPage = 1;
      
      expect(props.prepareDataForTable).toHaveBeenCalledWith(renderEditButton, currentPage)
    });
  
    it('should render LoadingOverlay when still fetching', () => {
      const loadingResult = {
        ...result,
        isLoading: true
      }
      prepareDataForTable.mockReturnValue(loadingResult)
      wrapper = shallow(<Dashboard {...props} />);
      const loadingOverlayComponent = wrapper.find('LoadingOverlay');
      
      expect(loadingOverlayComponent).toHaveLength(1);
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
      
      expect(props.navigate).toHaveBeenCalledWith('/add-location')
    });
  
    it('should render next button disabled and previous button enabled when next button is clicked', () => {
      const {  tableNavigationProps: { next: nextButton } }: any = tableComponent.props()
  
      nextButton.onClick();
      wrapper.update();
      const updatedTableComponent = wrapper.find('Table');
      const {  tableNavigationProps: { next, previous } }: any = updatedTableComponent.props()
      
      expect(previous.disabled).toBeFalsy();
      expect(next.disabled).toBeTruthy();
    });
  
    it('should be back to previous button state when previous button is clicked after next button', () => {
      const {  tableNavigationProps: { next: nextButton } }: any = tableComponent.props()
      
      nextButton.onClick();
      wrapper.update();
      const updatedTableComponent = wrapper.find('Table');
      const {  tableNavigationProps: { previous: previousButton } }: any = updatedTableComponent.props();
      previousButton.onClick();
      wrapper.update();
      const reUpdatedTableComponent = wrapper.find('Table');
      const {  tableNavigationProps: { next, previous } }: any = reUpdatedTableComponent.props()
    
      expect(previous.disabled).toBeTruthy();
      expect(next.disabled).toBeFalsy();
    });
  });
});
