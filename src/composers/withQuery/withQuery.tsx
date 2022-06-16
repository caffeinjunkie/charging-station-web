import React from 'react';
import { request } from 'graphql-request';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import type { Props, QueryProps } from './withQuery.type';
import config from '../../config';
import { LoadingOverlay } from "../../components/LoadingOverlay";

const { endpoint: { GRAPHQL_URL } } = config;

const withQuery = (queryProps: QueryProps): Function => (ComposedComponent: any) => {
  function HOCQuery(props: Props) {
    const { id } = useParams();
    const { query, options } = queryProps;
    const { queryKey, ...queryVariables } = options;
    const isFetchById = queryKey === 'fetchById';
    if (isFetchById) {
      Object.assign(queryVariables, { id });
      
    }
    const [refetchVariables, setRefetchVariables] = React.useState(queryVariables);
    const useQueryOptions =  {
      keepPreviousData: true,
      staleTime: Infinity,
      cacheTime: 0,
      refetchInterval: 500
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
      isLoading ? <LoadingOverlay /> : <ComposedComponent {...updatedProps} />
    )
  }
  return HOCQuery;
};

export default withQuery;
