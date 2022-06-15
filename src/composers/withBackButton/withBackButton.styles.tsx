import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';

import { FontStyles, FontSize, Colors } from '../../themes';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyledBackButton = styled(FaChevronLeft)`
  padding: 10px 12px 10px 10px;
  margin: 24px 8px 2px 32px;
  border-radius: 0.4vh;
  border-color: ${Colors.lighterGrey};
  justify-content: center;
  align-items: center;
  ${FontStyles.Light};
  ${FontSize.Large};
  color: ${Colors.darkerGrey};
  
  &:hover {
    background-color: ${Colors.lighterGrey};
    cursor: pointer;
  }
`;
