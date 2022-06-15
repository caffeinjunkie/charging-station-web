import styled from 'styled-components';

import { FontStyles, FontSize, Colors } from '../../themes';

export const StyledContainer = styled.div`
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
`;

export const StyledTitleText = styled.div`
  margin: 4px;
  ${FontStyles.Bold};
  ${FontSize.Heading2};
  color: ${Colors.lightBlack};
`;