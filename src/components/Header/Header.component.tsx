import React from 'react';

import { TestUtils } from '../../utils';
import { StyledHeaderContainer } from './Header.styles';
import FastnedLogo from '../../assets/images/FastnedLogo.component';

const { testProps } = TestUtils;

const Header = (): JSX.Element => (
  <StyledHeaderContainer
    {...testProps('Header_Container')}
  >
    <FastnedLogo />
  </StyledHeaderContainer>
)

export default Header;
