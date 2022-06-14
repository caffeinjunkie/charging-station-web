import React from 'react';

import { StyledNavigationContainer, StyledButtonContainer } from './TableNavigation.styles';
import { Button } from '../../Button';
import { Props } from './TableNavigation.type';
import config from './TableNavigation.config';
import { TestUtils } from '../../../utils';

const { testProps } = TestUtils;
const { mapButtonProps } = config;

const TableNavigation = (props: Props) => {
  const { screenName, tableNavigationProps } = props;
  return (
    <StyledNavigationContainer
      {...testProps(`${screenName}_TableNavigation_Container`)}
    >
      {mapButtonProps(tableNavigationProps).map((buttonProps) => (
        <StyledButtonContainer>
          <Button screenName={screenName} {...buttonProps} />
        </StyledButtonContainer>
      ))}
    </StyledNavigationContainer>
  )
}

TableNavigation.defaultProps = config.defaultProps;

export default TableNavigation;
