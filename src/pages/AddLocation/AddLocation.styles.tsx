import styled from 'styled-components';

import { Colors, FontSize, FontStyles } from '../../themes';

export const StyledBackPopupContentContainer = styled.div`
  background-color: ${Colors.white};
  padding: 32px;
`

export const StyledBackPopupContentText = styled.div`
  ${FontStyles.Regular};
  ${FontSize.Large};
  color: ${Colors.lightBlack};
`

