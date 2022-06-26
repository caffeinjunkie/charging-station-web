import React from 'react';
import { isEmpty } from 'lodash';
import { TbSortAscending2, TbSortDescending2 } from 'react-icons/tb'

import {
  StyledTable,
  StyledBodyText,
  StyledHeaderText,
  StyledHeaderRow,
  StyledRow,
  StyledTableBody,
  StyledTableHead,
  StyledInlineText,
  StyledTableContainer,
  StyledHeaderSortIconContainer,
  StyledHeaderContainer
} from './Table.styles';
import type { Props, ColumnType, ContentType } from './Table.type';
import { useTranslation as translate } from '../../hooks/useTranslation';
import { TestUtils } from '../../utils';
import config from './Table.config';
import EmptyRecords from './EmptyRecords/EmptyRecords.component';
import TableNavigation from "./TableNavigation/TableNavigation.component";

const { testProps } = TestUtils;

const Table = (props: Props): JSX.Element => {
  const {
    columns,
    data,
    screenName,
    name,
    sortProps,
    withSorting,
    onClickHeaderText,
    withTableNavigation,
    tableNavigationProps
  } = props;
  
  const renderHeaderText = ({ key, className, sortable }: ColumnType) => {
    const isSortable = withSorting && sortable;
    const additionalClassname = isSortable ? 'sortable' : '';
    const onClick = isSortable ? () => onClickHeaderText(key) : () => {};
    const { sortBy, isAsc } = sortProps;
    const order = isAsc ? <TbSortDescending2 /> : <TbSortAscending2 />;
    const orderBy = key === sortBy ? order : '';
    
    return (
      <StyledHeaderText
        key={key}
        className={`${className} ${additionalClassname}`}
        onClick={onClick}
        {...testProps(`${screenName}_${name}_${key}Header_Text`)}
      >
        <StyledHeaderContainer>
          {translate(`${screenName}-${name}-${key}-label`)}
          {isSortable && <StyledHeaderSortIconContainer>
            {orderBy}
          </StyledHeaderSortIconContainer>}
        </StyledHeaderContainer>
      </StyledHeaderText>
    );
  }
  
  const renderRowText = (key: string, content: ContentType, index: number) => {
    const { className, value } = content;
    return (
      <StyledBodyText
        key={key}
        className={className}
        data-label={translate(`${screenName}-${name}-${columns[index].key}-label`)}
      >
        <StyledInlineText>{value}</StyledInlineText>
      </StyledBodyText>
    )
  }
  
  const renderRecords = (record: Object, index: number) => (
    <StyledRow key={index} {...testProps(`${screenName}_${name}${index}_Row`)}>
      {Object.entries(record).map(([key, content], recordIndex) =>
        renderRowText(key, content, recordIndex))}
    </StyledRow>
  )
  
  const renderTableNavigation = () => (
    <TableNavigation
      screenName={screenName}
      tableNavigationProps={tableNavigationProps}
    />
  );
  
  return (
    <StyledTableContainer>
      <StyledTable>
        <StyledTableHead>
          <StyledHeaderRow>
            {columns.map(renderHeaderText)}
          </StyledHeaderRow>
        </StyledTableHead>
        <StyledTableBody>
          {data.map(renderRecords)}
        </StyledTableBody>
        {isEmpty(data) && <EmptyRecords
          screenName={screenName}
          name={name}
          colSpan={columns.length}
        />}
      </StyledTable>
      {withTableNavigation && renderTableNavigation()}
    </StyledTableContainer>
  )
}

Table.defaultProps = config.defaultProps;

export default Table;
