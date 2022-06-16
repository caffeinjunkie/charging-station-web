import styled from 'styled-components';

import { Colors, FontSize, FontStyles } from '../../themes';

export const StyledContainer = styled.div`
  padding: 10px 12px;
  border: 0.8px solid ${Colors.lighterGrey};
  background-color: ${Colors.white};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 12px;
  -webkit-box-shadow: 0 0.1vh 0.5vh ${Colors.shadowColor};
`;

export const StyledTitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  height: 48px;
  padding-bottom: 12px;
`;

export const StyledTitle = styled.div`
  ${FontSize.Heading3};
  ${FontStyles.Bold};
  color: ${Colors.lightBlack};
  display: flex;
  align-items: center;
  align-self: center;
  margin-left: 4px;

  svg {
    margin-right: 4px;
    min-width: 20px;
  }
`;
