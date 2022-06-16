import styled from 'styled-components';

import { Colors, FontSize, FontStyles } from '../../themes';

export const StyledContainer = styled.div`
  padding: 18px 12px;
  border: 1px solid ${Colors.lightGrey};
  background-color: ${Colors.white};
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 12px;
  -webkit-box-shadow: 0 0.1vh 0.3vh ${Colors.shadowColor};
`;

export const StyledTitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

export const StyledTitle = styled.div`
  ${FontSize.Heading3};
  ${FontStyles.Bold};
  color: ${Colors.lightBlack};
  display: flex;
  align-items: center;
  margin-left: 4px;
  padding-bottom: 16px;

  svg {
    margin-right: 4px;
    min-width: 20px;
  }
`;
