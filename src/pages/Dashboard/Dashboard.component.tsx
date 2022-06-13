import React, { useState } from 'react';
import { isEmpty } from "lodash";

import type { Props } from './Dashboard.type';
import {
  StyledContainer,
  StyledTitleText ,
  StyledListHeaderContainer
} from './Dashboard.styles';
import { Button } from '../../components/Button';
import { useTranslation as translate } from '../../hooks/useTranslation';
import { Table } from '../../components/Table';
import config from './Dashboard.config';
import { TestUtils } from '../../utils';
import { LoadingOverlay } from "../../components/LoadingOverlay";

const SCREEN_NAME = 'Dashboard';

const { testProps } = TestUtils;

const { COLUMNS } = config;

const Dashboard = (props: Props): JSX.Element => {
  const {
    navigate,
    prepareDataForTable
  } = props;
  const [currentPage, setCurrentPage] = useState(1)
  const renderEditButton = () => (
    <Button
      screenName={SCREEN_NAME}
      name="EditButton"
      className="action-button"
      text={translate(`${SCREEN_NAME}-ActionButton-Edit-text`)}
    />
  );
  const { fetchedResult, isLoading, pagination: { pageCount } } = prepareDataForTable(
    renderEditButton, currentPage
  );
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pageCount;
  const tableNavigationProps = {
    next: {
      disabled: isLastPage,
      onClick: () => setCurrentPage(currentPage + 1)
    },
    previous: {
      disabled: isFirstPage,
      onClick: () => setCurrentPage(currentPage - 1)
    }
  }
  
  const onClickAddLocationButton = () => {
    navigate('/add-location');
  };
  
  const renderTable = () => (
    <Table
      screenName={SCREEN_NAME}
      name="LocationList"
      columns={COLUMNS}
      data={fetchedResult}
      withTableNavigation={!isEmpty(fetchedResult)}
      tableNavigationProps={tableNavigationProps}
    />
  );
  
  return (
    <StyledContainer>
      <StyledListHeaderContainer>
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
      </StyledListHeaderContainer>
      {isLoading ? <LoadingOverlay /> : renderTable()}
    </StyledContainer>
  )
}

Dashboard.defaultProps = config.defaultProps;

export default Dashboard;
