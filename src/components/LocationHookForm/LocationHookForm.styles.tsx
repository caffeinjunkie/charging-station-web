import styled from 'styled-components';

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
