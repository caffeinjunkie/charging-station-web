import * as React from 'react';
import { request } from 'graphql-request';
import { useQuery } from 'react-query';

import type { Props, QueryProps } from './withQuery.type';

const withQuery = (queryProps: QueryProps): Function => (ComposedComponent: any) => {
  function HOCComponent(props: Props) {
    const { query, options } = queryProps;
    const { queryKey, ...queryVariables } = options;
    // move endpoint to env later?
    const endpoint = 'http://localhost:1337/graphql';
    const result = useQuery(queryKey, async () => request(
      endpoint,
      query,
      queryVariables
    ));
    const { data, isLoading, error } = result;
    const updatedProps = {
      ...props,
      fetchedData: data,
      loading: isLoading,
      error
    }
    return (
      <ComposedComponent {...updatedProps} />
    )
  }
  return HOCComponent;
};

export default withQuery;
