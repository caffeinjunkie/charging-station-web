import React from 'react';

import type { Props } from './Dashboard.type';
import {
  StyledContainer,
  StyledTitleText ,
  StyledListHeaderContainer
} from './Dashboard.styles';
import { Button } from '../../components/Button';
import { useTranslation as translate } from '../../hooks/useTranslation';

const SCREEN_NAME = 'Dashboard';

const Dashboard = (props: Props): JSX.Element => {
  const { navigate } = props;
  
  const onClickAddLocationButton = () => {
    navigate('/add-location');
  };
  
  return (
    <StyledContainer>
      <StyledListHeaderContainer>
        <StyledTitleText>
          {translate( `${SCREEN_NAME}-LocationList-title`)}
        </StyledTitleText>
        <Button
          screenName={SCREEN_NAME}
          text={translate(`${SCREEN_NAME}-AddLocationButton-text`)}
          className="primary"
        />
      </StyledListHeaderContainer>
    </StyledContainer>
  )
}

export default Dashboard;
