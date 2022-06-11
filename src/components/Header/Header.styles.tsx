import styled from 'styled-components';

import { Colors } from '../../themes';
import FastnedLogo from '../../assets/images/FastnedLogo.component';

export const StyledHeaderContainer = styled.div`
  height: 6vh;
  padding: 16px 8px 16px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.black};
  -webkit-box-shadow: 0 1vh 2vh ${Colors.shadowColor};
`;

export const StyledFastnedImage = styled(FastnedLogo)``;
