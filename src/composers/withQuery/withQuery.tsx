import * as React from 'react';
import { request } from 'graphql-request';

import type { Props, QueryProps } from './withQuery.type';

const withQuery = (queryProps: QueryProps): Function => (ComposedComponent: any) => {
  function HOCComponent(props: Props) {
    console.log(queryProps)
    return (
      <ComposedComponent {...props} />
  );
  }
  
  return HOCComponent;
};

export default withQuery;
