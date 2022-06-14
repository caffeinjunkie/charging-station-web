import React from 'react';
import { isEmpty } from "lodash";

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
import { LoadingOverlay } from '../../components/LoadingOverlay';

const SCREEN_NAME = 'Dashboard';

const { testProps } = TestUtils;

const { COLUMNS } = config;

const Dashboard = (props: Props): JSX.Element => {
  const {
    navigate,
    prepareDataForTable,
    fetchedData,
    loading,
    getTableNavigationProps
  } = props;
  const tableNavigationProps = getTableNavigationProps();
  
  const onClickAddLocationButton = () => {
    navigate('/locations');
  };
  
  const renderEditButton = (id: string) => (
    <Button
      screenName={SCREEN_NAME}
      name="EditButton"
      className="action-button"
      onClick={() => console.log(id)}
      text={translate(`${SCREEN_NAME}-ActionButton-Edit-text`)}
    />
  );
  
  const renderTable = () => (
    <Table
      screenName={SCREEN_NAME}
      name="LocationList"
      columns={COLUMNS}
      data={prepareDataForTable(renderEditButton)}
      withTableNavigation={!isEmpty(fetchedData)}
      tableNavigationProps={tableNavigationProps}
    />
  );
  
  return (
    <StyledContainer>
      <StyledHeaderContainer>
        <StyledTitleText {...testProps(`${SCREEN_NAME}_LocationListTitle_Text`)}>
          {translate( `${SCREEN_NAME}-LocationList-title`)}
        </StyledTitleText>
        <Button
          screenName={SCREEN_NAME}
          name="AddLocation"
          text={translate(`${SCREEN_NAME}-AddLocationButton-text`)}
          className="primary"
          onClick={onClickAddLocationButton}
          {...testProps(`${SCREEN_NAME}_AddLocation_Button`)}
        />
      </StyledHeaderContainer>
      {loading ? <LoadingOverlay /> : renderTable()}
    </StyledContainer>
  )
}

Dashboard.defaultProps = config.defaultProps;

export default Dashboard;
