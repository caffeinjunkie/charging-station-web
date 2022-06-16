import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

import { Table } from '../../Table';
import config from './ChargersTable.config';
import { Props, ChargerType } from './ChargersTable.type';
import {
  StyledActionButtonsContainer,
  StyledActionButton
} from './ChargersTable.styles';
import { TestUtils } from '../../../utils';

const { COLUMNS, mappedChargerData } = config;
const { testProps } = TestUtils;

const ChargersTable = (props: Props) => {
  const {
    screenName,
    data,
    onClickEdit,
    onClickDelete
  } = props;
  
  const renderActionButtons = (selectedCharger: ChargerType) => (
    <StyledActionButtonsContainer>
      <StyledActionButton
        onClick={() => onClickEdit(selectedCharger)}
        {...testProps(`${screenName}_Edit_Button`)}
      >
        <FaEdit />
      </StyledActionButton>
      <StyledActionButton
        onClick={() => onClickDelete(selectedCharger)}
        className="delete-button"
        {...testProps(`${screenName}_Delete_Button`)}
      >
        <FaTrashAlt />
      </StyledActionButton>
    </StyledActionButtonsContainer>
  );
  
  const tableData = mappedChargerData(data, renderActionButtons)
  
  return (
    <Table
      screenName="ChargersTable"
      name="Chargers"
      columns={COLUMNS}
      data={tableData}
    />
  );
}

export default ChargersTable;
