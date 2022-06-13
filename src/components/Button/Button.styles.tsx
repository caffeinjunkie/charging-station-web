import styled from 'styled-components';

import { Colors, FontStyles, FontSize } from '../../themes';

export const StyledText = styled.div`
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
  ${FontSize.Large}
  ${FontStyles.Bold}

  &.primary {
    background-color: ${Colors.primary};
  }

  &.primary:hover {
    background-color: ${Colors.primaryDark};
  }
  
  &.secondary {
    background-color: ${Colors.lighterGrey};
  }

  &.secondary:hover {
    background-color: ${Colors.lightGrey};
  }

  &.action-button {
    background-color: ${Colors.white};
    border-width: 1px;
    border-color: ${Colors.lightGrey};
    border-style: solid;
    ${FontSize.Medium}
    ${FontStyles.Light}
  }

  &.action-button:hover {
    background-color: ${Colors.offWhite};
  }

  @media screen and (max-width:720px) {
    &.action-button {
      background-color: ${Colors.white};
      border-width: 1px;
      border-color: ${Colors.lightGrey};
      border-style: solid;
      ${FontSize.Medium};
      ${FontStyles.Light};
      width: 100%;
    }
  }

  ${({ disabled }: any) => disabled && `
    &&& {
      background-color: ${Colors.offWhite};
      color: ${Colors.lightGrey};
      cursor: default;
    }
  `}

  ${({ containerStyle }: any) => containerStyle}
`;
