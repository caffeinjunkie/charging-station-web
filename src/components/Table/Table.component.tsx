import React from 'react';

import {
  StyledTable,
  StyledBodyText,
  StyledHeaderText,
  StyledHeaderRow,
  StyledRow,
  StyledTableBody,
  StyledTableHead
} from './Table.styles';
import type { Props, ColumnType, ContentType } from './Table.type';
import { useTranslation as translate } from '../../hooks/useTranslation';
import { TestUtils } from '../../util';

const { testProps } = TestUtils;

const Table = (props: Props): JSX.Element => {
  const { columns, data, screenName, name } = props;
  
  const renderHeaderText = ({ key, className }: ColumnType) => (
    <StyledHeaderText
      key={key}
      className={className}
      {...testProps(`${screenName}_${name}_${key}Header_Text`)}
    >
      {translate(`${screenName}-${name}-${key}-title`)}
    </StyledHeaderText>
  );
  
  const renderRowText = (key: string, content: ContentType) => {
    const { className, value } = content;
    
    return (
      <StyledBodyText
        key={key}
        className={className}
      >
        {value}
      </StyledBodyText>
    )
  }
  
  const renderContent = (rowData: Object, index: number) => (
    <StyledRow key={index} {...testProps(`${screenName}_${name}${index}_Row`)}>
      {Object.entries(rowData).map(([key, content]) =>
        renderRowText(key, content))}
    </StyledRow>
  )

  return (
    <StyledTable>
      <StyledTableHead>
        <StyledHeaderRow>
          {columns.map(renderHeaderText)}
        </StyledHeaderRow>
      </StyledTableHead>
      <StyledTableBody>
        {data.map(renderContent)}
      </StyledTableBody>
    </StyledTable>
  )
}

export default Table;
