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

export const StyledTitleBadge = styled.div`
  ${FontSize.Small};
  ${FontStyles.Regular};
  color: ${Colors.grey};
  background-color: ${Colors.lighterGrey};
  border-radius: 16px;
  padding: 2px 12px;
`;

export const StyledInformationText = styled.div`
  border-radius: 16px;
  background-color: ${Colors.primary};
  padding: 2px 12px;
  display: flex;
  z-index: 10;
  align-items: center;
  color: ${Colors.primary[500]};
  ${FontSize.Small};
  ${FontStyles.Regular};
  margin-top: -6px;
  margin-bottom: 16px;

  svg {
    margin-right: 6px;
  }
`;

export const StyledText = styled.div`
  ${FontSize.Small};
  ${FontStyles.Regular};
  width: 100%;
`;
