import styled from 'styled-components';

import { FontStyles, FontSize, Colors } from '../../../themes';

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const StyledInputSectionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 8px;
  flex-direction: column;
`;

export const StyledTitleText = styled.div`
  ${FontStyles.Bold};
  ${FontSize.Medium};
  color: ${Colors.lightBlack};
  margin-bottom: 4px;
`;
