import styled from 'styled-components';

import { Colors, FontSize, FontStyles } from '../../themes';

export const StyledTableContainer = styled.div`
  overflow:auto;
`

export const StyledTable = styled.table`
  border-style: solid;
  border-width: 1px;
  border-color: ${Colors.lighterGrey};
  border-radius: 4px;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  table-layout: fixed;
  
  @media screen and (max-width:720px) {
    border-style: none;
    border-width: 0;
  
    thead {
      display: none;
    }
    
    tbody .tr .td {
      display: block;
      width: 100%;
    }
    
    tr {
      padding-top: 12px;
    }
    
    td {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-style: none;
      border-width: 0;
      padding: 12px 24px;
      text-align: right;
      background-color: ${Colors.offWhite};
    }

    td:before {
      font-family: DIN-Bold;
      content: attr(data-label);
      width: 50%;
      text-align: left;
    }
    
    td:first-child {
      padding-top: 24px;
    }
    
    td:last-child {
      margin-right: -5px;
      margin-left: -5px;
    }
    
    td:last-child:before {
      content: none;
    }

    tbody {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
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
  @media screen and (max-width:720px) {
    :nth-of-type(even) {
      background-color: ${Colors.white};
    }
  }
`;

export const StyledHeaderText = styled.th`
  padding: 14px 12px;
  ${FontStyles.Bold};
  ${FontSize.Medium};

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

export const StyledInlineText = styled.p``

export const StyledBodyText = styled.td`
  padding: 0 12px;
  ${FontStyles.Light}
  ${FontSize.Medium}
  justify-content: center;
  align-items: center;

  &.align-center {
    text-align: center;
  }

  &.align-right {
    display: flex;
    text-align: right;
    justify-content: flex-end;
  }
  
  &.align-right p {
    @media screen and (max-width:720px) {
      width: 100%;
      justify-content: center;
    }
  }

  &.align-left {
    text-align: left;
  }
  
  &.connected p {
    display: inline;
    background-color: ${Colors.success};
    color: ${Colors.white};
    padding: 6px;
    border-radius: 4px;
    ${FontStyles.Bold};
    ${FontSize.Small};
    
    @media screen and (max-width:720px) {
      background-color: transparent;
      color: ${Colors.black};
      ${FontStyles.Light};
      ${FontSize.Medium};
    }
  }

  &.not_connected p {
    display: inline;
    background-color: ${Colors.error};
    color: ${Colors.white};
    padding: 6px;
    border-radius: 4px;
    ${FontStyles.Bold};
    ${FontSize.Small};

    @media screen and (max-width:720px) {
      background-color: transparent;
      color: ${Colors.black};
      ${FontStyles.Light};
      ${FontSize.Medium};
    }
  }

  &.removed p {
    display: inline;
    background-color: ${Colors.lightGrey};
    color: ${Colors.white};
    padding: 6px;
    border-radius: 4px;
    ${FontStyles.Bold};
    ${FontSize.Small};

    @media screen and (max-width:720px) {
      background-color: transparent;
      color: ${Colors.black};
      ${FontStyles.Light};
      ${FontSize.Medium};
    }
  }

  @media screen and (max-width:720px) {
    &.align-center {
      text-align: center;
    }

    &.align-right {
      display: flex;
      text-align: center;
      justify-content: center;
    }

    &.align-left {
      text-align: center;
    }
  }
`;
