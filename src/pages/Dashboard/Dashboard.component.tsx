import React from 'react';

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

const SCREEN_NAME = 'Dashboard';

const { testProps } = TestUtils;

const { COLUMNS, data } = config;

const Dashboard = (props: Props): JSX.Element => {
  const { navigate } = props;
  
  const onClickAddLocationButton = () => {
    navigate('/add-location');
  };
  
  return (
    <StyledContainer>
      <StyledListHeaderContainer>
        <StyledTitleText {...testProps(`${SCREEN_NAME}_LocationListTitle_Text`)}>
          {translate( `${SCREEN_NAME}-LocationList-title`)}
        </StyledTitleText>
        <Button
          name="AddLocation"
          screenName={SCREEN_NAME}
          text={translate(`${SCREEN_NAME}-AddLocationButton-text`)}
          className="primary"
          onClick={onClickAddLocationButton}
          {...testProps(`${SCREEN_NAME}_AddLocation_Button`)}
        />
      </StyledListHeaderContainer>
      <Table
        screenName={SCREEN_NAME}
        name="LocationList"
        columns={COLUMNS}
        data={data}
      />
    </StyledContainer>
  )
}

export default Dashboard;
