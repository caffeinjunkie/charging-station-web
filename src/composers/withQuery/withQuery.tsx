import React from 'react';
import { request } from 'graphql-request';
import { useQuery } from 'react-query';

import type { Props, QueryProps } from './withQuery.type';
import config from '../../config';

const { endpoint: { GRAPHQL_URL } } = config;

const withQuery = (queryProps: QueryProps): Function => (ComposedComponent: any) => {
  function HOCQuery(props: Props) {
    const { query, options } = queryProps;
    const { queryKey, ...queryVariables } = options;
    const [refetchVariables, setRefetchVariables] = React.useState(queryVariables);
    const useQueryOptions =  {
      keepPreviousData: true
    }
    const result = useQuery([queryKey, refetchVariables], async () => request(
      GRAPHQL_URL,
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
  return HOCQuery;
};

export default withQuery;
