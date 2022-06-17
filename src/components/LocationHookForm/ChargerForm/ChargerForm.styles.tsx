import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const StyledInputSectionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;

  @media screen and (max-width:720px) {
    flex-direction: column;
    width: 96%;
  }
  
  @media screen and (max-width: 300px) {
    display: none;
  }
`;

export const StyledInputContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 8px;
  flex-direction: column;
`;
