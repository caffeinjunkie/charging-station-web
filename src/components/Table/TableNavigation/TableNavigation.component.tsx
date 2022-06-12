import React from 'react';

import { StyledNavigationContainer } from './TableNavigation.styles';
import { Button } from '../../Button';
import { Props } from './TableNavigation.type';
import config from './TableNavigation.config';

const TableNavigation = (props: Props) => {
  const { screenName, tableNavigationProps: { next, previous } } = props;
  return (
    <StyledNavigationContainer>
      <Button
        disabled={previous.disabled}
        name="Previous"
        screenName={screenName}
        className="action-button"
        onClick={previous.onClick}
        text="<"
      />
      <Button
        disabled={next.disabled}
        name="Next"
        screenName={screenName}
        className="action-button"
        onClick={next.onClick}
        text=">"
      />
    </StyledNavigationContainer>
  )
}

TableNavigation.defaultProps = config.defaultProps;

export default TableNavigation;
