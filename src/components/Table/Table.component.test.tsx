import React from 'react';
import { cleanup, render, RenderResult } from '@testing-library/react';

import Table from './Table.component';
import { dataMock, columnMock } from '../../fixtures/tableMockData.fixture';

describe('Table', () => {
  let result: RenderResult;
  const screenName = 'Dashboard';
  const name = 'LocationList';
  const props = {
    columns: columnMock,
    data: dataMock,
    screenName,
    name
  }

  beforeEach(() => {
    result = render(<Table {...props} />)
  });
  
  afterEach(() => {
    cleanup();
  });

  describe('#render', () => {
    it('should render table header value', () => {
      const { getByTestId } = result;
      const headerKey1TestId = 'Dashboard_LocationList_Key1Header_Text';
      const headerKey2TestId = 'Dashboard_LocationList_Key2Header_Text';
      
      expect(getByTestId(headerKey1TestId)).toBeTruthy()
      expect(getByTestId(headerKey2TestId)).toBeTruthy()
    });
  
    it('should render table rows', () => {
      const { getByTestId } = result;
      const row1TestId = 'Dashboard_LocationList0_Row';
      const row2TestId = 'Dashboard_LocationList1_Row';
    
      expect(getByTestId(row1TestId)).toBeTruthy()
      expect(getByTestId(row2TestId)).toBeTruthy()
    });
  
    it('should render table rows', () => {
      const { getByText } = result;
      const row1Text1 = 'first data first value';
      const row1Text2 = 'first data second value';
      const row2Text1 = 'second data first value';
      const row2Text2 = 'second data second value';
    
      expect(getByText(row1Text1)).toBeTruthy()
      expect(getByText(row1Text2)).toBeTruthy()
      expect(getByText(row2Text1)).toBeTruthy()
      expect(getByText(row2Text2)).toBeTruthy()
    });
  
    it('should render empty records component when data is empty', () => {
      const emptyRecordsTestId = 'Dashboard_LocationList_EmptyRecords_Text';
      const emptyDataProps = {
        ...props,
        data: []
      }
      const { getByTestId } = render(<Table {...emptyDataProps} />);
      
      expect(getByTestId(emptyRecordsTestId)).toBeTruthy()
    });
  
    it('should render table navigation when withTableNavigation props is exist', () => {
      const withNavigationProps = {
        ...props,
        withTableNavigation: true
      }
      const { getByText } = render(<Table {...withNavigationProps} />);
      
      expect(getByText('>')).toBeTruthy();
      expect(getByText('<')).toBeTruthy();
    });
  });
});
