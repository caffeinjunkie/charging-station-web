import styled from 'styled-components';
import { Colors } from "../../themes";

export const StyledContainer = styled.div`
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
`;

export const StyledFooterButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  
  &.add {
    justify-content: flex-end;
  }
`;

export const StyledChargerPopupContainer = styled.div`
  padding: 32px;
  background-color: ${Colors.white};
`;
