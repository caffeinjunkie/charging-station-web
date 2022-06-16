import { GoX } from 'react-icons/go';
import styled from 'styled-components';

import { Colors, FontStyles, FontSize } from '../../themes';

export const StyledPopupOverlay = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;

  ${({ hidden }) => hidden && `
    &&& {
      display: none
    }
  `}
`;

export const StyledContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: ${Colors.white};
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid ${Colors.lightGrey};
`;

export const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-top: 1px solid ${Colors.lightGrey};
  align-items: center;
  justify-content: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const StyledTitle = styled.div`
  ${FontStyles.Bold};
  ${FontSize.Heading1};
  color: ${Colors.lightBlack};
  text-align: left;
  align-self: center;
  margin: 20px 24px;
`;

export const StyledCloseButton = styled(GoX)`
  align-items: flex-end;
  justify-content: flex-end;
  align-self: center;
  width: 24px;
  height: 24px;
  color: ${Colors.lightBlack};
  margin: 20px 24px;
  
  :hover {
    cursor: pointer;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  margin-left: 8px;
  margin-right: 8px;
`;
