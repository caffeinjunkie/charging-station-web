import styled from 'styled-components';

import { Colors, FontStyles, FontSize } from '../../themes';

export const StyledText = styled.div`
  ${FontSize.Large}
  ${FontStyles.Bold}
  margin: 0 8px;
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  margin: 4px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  border-style: none;
  color: ${Colors.lightBlack};

  &.primary {
    background-color: ${Colors.primary};
  }
  &.secondary {
    background-color: ${Colors.lightGrey};
  }

  ${({ disabled }: any) => disabled && `
    &&& {
      background-color: ${Colors.lighterGrey};
      color: ${Colors.darkerGrey};
      cursor: default;
    }
  `}

  ${({ containerStyle }: any) => containerStyle}
`;
