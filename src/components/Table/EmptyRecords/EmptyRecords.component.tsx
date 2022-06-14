import React from 'react';

import { TestUtils } from '../../../utils';
import {
  StyledEmptyRecordsText,
  StyledRow,
  StyledTableFooter,
  StyledBody
} from './EmptyRecords.styles';
import type { Props } from './EmptyRecords.type';
import { useTranslation as translate } from '../../../hooks/useTranslation';

const { testProps } = TestUtils;

const EmptyRecords = (props: Props): JSX.Element => {
  const { screenName, name, colSpan } = props;
  return (
    <StyledTableFooter>
      <StyledRow>
        <StyledBody colSpan={colSpan}>
          <StyledEmptyRecordsText
            {...testProps(`${screenName}_${name}_EmptyRecords_Text`)}
          >
            {translate(`${screenName}-${name}-Empty-text`)}
          </StyledEmptyRecordsText>
        </StyledBody>
      </StyledRow>
    </StyledTableFooter>
    
  )
}

export default EmptyRecords;
