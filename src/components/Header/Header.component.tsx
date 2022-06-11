import React from 'react';

import { TestUtils } from '../../util';
import { StyledHeaderContainer } from './Header.styles';
import FastnedLogo from '../../assets/images/FastnedLogo.component';

const { testProps } = TestUtils;

const Header = (): JSX.Element => (
  <StyledHeaderContainer
    {...testProps('Header_container')}
  >
    <FastnedLogo />
  </StyledHeaderContainer>
)

export default Header;
