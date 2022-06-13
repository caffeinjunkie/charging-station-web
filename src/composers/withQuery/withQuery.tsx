import * as React from 'react';
import { request } from 'graphql-request';
import { useQuery } from 'react-query';
import { isEmpty } from 'lodash';

import type { Props, QueryProps } from './withQuery.type';

const withQuery = (queryProps: QueryProps): Function => (ComposedComponent: any) => {
  function HOCComponent(props: Props) {
    const { query, options } = queryProps;
    const { queryKey, ...queryVariables } = options;
    const [refetchVariables, setRefetchVariables] = React.useState(queryVariables);
    // move endpoint to env later?
    const endpoint = 'http://localhost:1337/graphql';
    const useQueryOptions =  {
      keepPreviousData: true
    }
    const result = useQuery([queryKey, refetchVariables], async () => request(
      endpoint,
      query,
      refetchVariables
    ), useQueryOptions);
    const { data, isLoading, error } = result;
    const updatedProps = {
      ...props,
      refetch: setRefetchVariables,
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
