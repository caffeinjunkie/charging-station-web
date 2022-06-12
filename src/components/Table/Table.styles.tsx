import styled from 'styled-components';

import { Colors, FontSize, FontStyles } from '../../themes';

export const StyledTable = styled.table`
  border-style: solid;
  border-width: 1px;
  border-color: ${Colors.lighterGrey};
  border-radius: 4px;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
`;

export const StyledTableHead = styled.thead``;

export const StyledTableBody = styled.tbody``;

export const StyledHeaderRow = styled.tr`
  background-color: ${Colors.offWhite};
`;

export const StyledRow = styled.tr`
  :nth-of-type(odd) {
    background-color: ${Colors.white};
  }
  :nth-of-type(even) {
    background-color: ${Colors.offWhite};
  }
`;

export const StyledHeaderText = styled.th`
  padding: 14px 12px;
  ${FontStyles.Bold}
  ${FontSize.Medium}

  &.align-center {
    text-align: center;
  }
  
  &.align-right {
    text-align: right;
  }

  &.align-left {
    text-align: left;
  }
`;

export const StyledBodyText = styled.td`
  padding: 8px 12px;
  ${FontStyles.Light}
  ${FontSize.Medium}

  &.align-center {
    text-align: center;
  }

  &.align-right {
    display: flex;
    text-align: right;
    justify-content: flex-end;
  }

  &.align-left {
    text-align: left;
  }
`;
