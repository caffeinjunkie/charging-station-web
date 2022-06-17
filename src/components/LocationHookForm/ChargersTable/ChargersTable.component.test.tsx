import React from 'react';
import { shallow } from 'enzyme';

import ChargersTable from './ChargersTable.component';
import { Table } from "../../Table";

describe('ChargersTable', () => {
  const props = {
    onClickDelete: jest.fn(),
    onClickEdit: jest.fn(),
    screenName: 'Screen',
    data: []
  }
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  describe('#render', () => {
    it('should render table', () => {
      const wrapper = shallow(<ChargersTable {...props} />);
      const table = wrapper.find(Table);
      
      expect(table).toHaveLength(1);
    });
  });
});
