import styled from 'styled-components';

import { Colors } from '../../themes';

export const StyledHeaderContainer = styled.div`
  height: 6vh;
  padding: 16px 8px 16px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${Colors.black};
  -webkit-box-shadow: 0 1vh 2vh ${Colors.shadowColor};
`;

export const StyledLanguageSelectorContainer = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  flex-direction: row;
  margin-right: 32px;
  border-radius: 16px;
  background-color: ${Colors.lighterBlack};
`

export const StyledLanguageItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  border-radius: 50%;
  background-color: ${Colors.lighterBlack};
  
  :hover {
    cursor: pointer;
    background-color: ${Colors.primaryDark};
  }
  
  :hover img {
    border: 2px solid ${Colors.primaryDark};
  }
`

export const StyledLanguageItemIcon = styled.img`
  border-radius: 50%;
  border: 2px solid ${Colors.lighterGrey};
  width: 20px;
  height: 20px;
  align-self: center;

  &.selected {
    border: 2px solid ${Colors.primaryDark};
  }
`
