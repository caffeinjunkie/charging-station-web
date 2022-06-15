import React from 'react';
import { isEmpty } from 'lodash';

import type { Props } from './Dashboard.type';
import {
  StyledContainer,
  StyledTitleText ,
  StyledHeaderContainer
} from './Dashboard.styles';
import { Button } from '../../components/Button';
import { useTranslation as translate } from '../../hooks/useTranslation';
import { Table } from '../../components/Table';
import config from './Dashboard.config';
import { TestUtils } from '../../utils';
import Paths from '../../root/RootNavigation/Paths';

const SCREEN_NAME = 'Dashboard';

const { testProps } = TestUtils;
const { COLUMNS } = config;

const Dashboard = (props: Props): JSX.Element => {
  const {
    navigate,
    prepareTableData,
    fetchedData,
    loading,
    getTableNavigationProps
  } = props;
  const tableNavigationProps = getTableNavigationProps();
  
  const onClickAddLocationButton = () => {
    navigate(Paths.AddLocation)
  };
  
  const renderEditButton = (id: string) => (
    <Button
      screenName={SCREEN_NAME}
      name="EditButton"
      className="action-button"
      onClick={() => navigate(`/locations/${id}`)}
      text={translate(`${SCREEN_NAME}-ActionButton-Edit-text`)}
    />
  );
  
  const renderTable = () => (
    <Table
      screenName={SCREEN_NAME}
      name="LocationList"
      columns={COLUMNS}
      data={prepareTableData(renderEditButton)}
      withTableNavigation={!isEmpty(fetchedData)}
      tableNavigationProps={tableNavigationProps}
    />
  );
  
  const renderAddLocationButton = () => (
    <Button
      screenName={SCREEN_NAME}
      name="AddLocation"
      text={translate(`${SCREEN_NAME}-AddLocationButton-text`)}
      className="primary"
      onClick={() => onClickAddLocationButton()}
      {...testProps(`${SCREEN_NAME}_AddLocation_Button`)}
    />
  )
  
  return (
    <StyledContainer>
      <StyledHeaderContainer>
        <StyledTitleText {...testProps(`${SCREEN_NAME}_LocationListTitle_Text`)}>
          {translate( `${SCREEN_NAME}-locationList-title`)}
        </StyledTitleText>
        {renderAddLocationButton()}
      </StyledHeaderContainer>
      {renderTable()}
    </StyledContainer>
  )
}

Dashboard.defaultProps = config.defaultProps;

export default Dashboard;
