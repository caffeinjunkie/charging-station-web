import styled from 'styled-components';

import { Colors } from '../../../themes';

export const StyledActionButtonsContainer = styled.div`
  display: flex;
  border: 1px solid ${Colors.lighterGrey};
  border-radius: 4px;
  background-color: ${Colors.white};
`;

export const StyledActionButton = styled.div`
  display: flex;
  padding: 8px 20px;
  color: ${Colors.darkerGrey};
  
  :hover {
    background-color: ${Colors.offWhite};
    cursor: pointer;
  }
  
  &.delete-button {
    border-left: 1px solid ${Colors.lighterGrey};
    color: ${Colors.softRed}
  }
`;

