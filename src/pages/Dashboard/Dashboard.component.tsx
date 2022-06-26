import React from 'react';
import { isEmpty } from 'lodash';
import { FaPlus } from 'react-icons/fa';

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
    getTableNavigationProps,
    sortTable
  } = props;
  const [sortBy, setSortBy] = React.useState('name');
  const [isAsc, setIsAsc] = React.useState(true);
  const tableNavigationProps = getTableNavigationProps(sortBy, isAsc);
  
  const onClickAddLocationButton = () => {
    navigate(Paths.AddLocation)
  };
  
  const handleSorting = (key: string) => {
    if (key === sortBy) {
      sortTable(key, !isAsc)
      setIsAsc(!isAsc)
      return;
    }
    setSortBy(key);
    setIsAsc(true)
    sortTable(key, true)
  }
  
  const renderEditButton = (id: string) => (
    <Button
      screenName={SCREEN_NAME}
      name="EditButton"
      className="action-button"
      onClick={() => navigate(`/locations/${id}`)}
      text={translate(`${SCREEN_NAME}-actionButton-edit-text`)}
    />
  );
  
  const renderTable = () => {
    const sortProps = {
      sortBy,
      isAsc
    }
    return (
      <Table
        screenName={SCREEN_NAME}
        name="LocationList"
        columns={COLUMNS}
        withSorting
        sortProps={sortProps}
        onClickHeaderText={handleSorting}
        data={prepareTableData(renderEditButton)}
        withTableNavigation={!isEmpty(fetchedData)}
        tableNavigationProps={tableNavigationProps}
      />
    );
  }
  
  const renderAddLocationButton = () => (
    <Button
      screenName={SCREEN_NAME}
      name="AddLocation"
      text={translate(`${SCREEN_NAME}-addLocationButton-text`)}
      className="primary"
      renderIcon={FaPlus}
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
