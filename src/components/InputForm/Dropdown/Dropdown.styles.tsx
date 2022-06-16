import styled from 'styled-components';

import { FontStyles, FontSize, Colors } from '../../../themes';

export const StyledDropdown = styled.select`
  ${FontSize.Large}
  ${FontStyles.Regular}
  padding: 14px 12px 12px 12px;
  width: 100%;
  color: ${Colors.lightBlack};
  background-color: ${Colors.offWhite};
  border-radius: 4px;
  border: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
  
  &.error {
    border: 1px solid ${Colors.error};
  }
  
  ${({ disabled }) => disabled && `
    background: ${Colors.lightGrey};
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

export const StyledDropdownContainer = styled.div`
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

export const StyledDropdownOverlay = styled.div`
  position: absolute;
  display: flex;
  padding: 12px;
  right: 2px;
  bottom: 2px;
  color: ${Colors.darkGrey};
`;
