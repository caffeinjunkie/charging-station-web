import styled from 'styled-components';

import { FontStyles, FontSize, Colors } from '../../themes';

export const StyledContainer = styled.div`
  padding: 16px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledTitleText = styled.div`
  margin: 4px;
  ${FontStyles.Bold}
  ${FontSize.Heading2}
  color: ${Colors.lightBlack}
`;

export const StyledListHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
  margin-top: 8px;
`;
