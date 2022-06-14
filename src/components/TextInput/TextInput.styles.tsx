import styled from 'styled-components';

import { FontStyles, FontSize, Colors } from '../../themes';

// export const StyledErrorIcon = styled(ErrorIcon)`
//   margin-right: 16px;
// `;

export const StyledErrorIcon = styled.div`
  margin-right: 16px;
  background-color: #C21F39;
`;

export const StyledInput = styled.input`
  ${FontSize.Large}
  ${FontStyles.Regular}
  padding: 14px 12px 12px 12px;
  color: ${Colors.lightBlack};
  background-color: ${Colors.offWhite};
  border-radius: 4px;
  border: none;
  outline: none;
  
  ${({ disabled }) => disabled && `
    background: ${Colors.lighterGrey};
    pointer-events: none;
    color: ${Colors.grey};
  `}
`;

export const StyledLabel = styled.label`
  ${FontSize.Medium}
  ${FontStyles.Bold}
  color: ${Colors.lightBlack};
  margin-bottom: 8px;
`;

export const StyledInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledContainerBorder = styled.div`
  border: 1px solid ${Colors.lightGrey}
  position: relative;
  border-radius: 8px;
  
  .error {
    border: 1px solid ${Colors.error}
  }
`;

export const StyledText = styled.p`
  margin-top: 6px;
  ${FontSize.Small}
  ${FontStyles.Light}
  color: ${Colors.lightBlack};
`;

export const StyledErrorText = styled(StyledText)`
  color: ${Colors.error};
`;
