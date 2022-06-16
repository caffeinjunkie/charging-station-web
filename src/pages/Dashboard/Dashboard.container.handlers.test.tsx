import handlers from './Dashboard.container.handlers';
import { locationMockData, mappedLocationData } from '../../fixtures/locationData'

const { prepareTableData, getTableNavigationProps } = handlers;

describe('dashboardHandlers', () => {
  const fetchedData = {
    locations: {
      data: [{
        id: 1,
        attributes: locationMockData
      }],
      meta: {
        pagination: {
          page: 2,
          pageCount: 4
        }
      }
    }
  };
  const props = {
    navigate: jest.fn(),
    refetch: jest.fn(),
    fetchedData,
    prepareTableData: jest.fn(),
    getTableNavigationProps: jest.fn()
  }
  
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  describe('#prepareTableData', () => {
    it('should return mapped data when fetchedDatafetchedData is not empty', () => {
      const renderEditButton = () => '';
      
      const result = prepareTableData(props)(renderEditButton);
      
      expect(result).toEqual(mappedLocationData)
    });
  
    it('should return empty array when fetchedData is empty', () => {
      const renderEditButton = () => '';
      const emptyDataProps = {
        ...props,
        fetchedData: []
      }
    
      const result = prepareTableData(emptyDataProps)(renderEditButton);
    
      expect(result).toEqual([])
    });
  });
  
  describe('#getTableNavigationProps', () => {
    it('should return table navigation props when fetchedData is not empty', () => {
      const tableNavigationProps = {
        next: {
          disabled: false,
          onClick: expect.any(Function)
        },
        previous: {
          disabled: false,
          onClick: expect.any(Function)
        }
      }
      
      const result = getTableNavigationProps(props)();
      
      expect(result).toEqual(tableNavigationProps);
    });
  
    it('should call props.refetch with params when next button onClick is invoked', () => {
      const refetchVariables = {
        pagination: {
          page: 3,
          pageSize: 5
        },
        sort: ['name:ASC']
      }
      const { next: { onClick } }: any = getTableNavigationProps(props)();
      
      onClick();
    
      expect(props.refetch).toHaveBeenCalledWith(refetchVariables);
    });
  
    it('should call props.refetch with params when previous button onClick is invoked', () => {
      const refetchVariables = {
        pagination: {
          page: 1,
          pageSize: 5
        },
        sort: ['name:ASC']
      }
      const { previous: { onClick } }: any = getTableNavigationProps(props)();
    
      onClick();
    
      expect(props.refetch).toHaveBeenCalledWith(refetchVariables);
    });
  
    it('should return empty object when fetchedData is empty', () => {
      const emptyDataProps = {
        ...props,
        fetchedData: []
      }
      
      const result = getTableNavigationProps(emptyDataProps)();
    
      expect(result).toEqual({});
    });
  });
});
