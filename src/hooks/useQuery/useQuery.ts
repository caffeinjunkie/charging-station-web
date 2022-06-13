import { useQuery } from 'react-query';
import { request } from 'graphql-request';

export const useQueryRequest = (query: string, fetchVariables = {}, useQueryOptions = {}) => {
  const endpoint = 'http://localhost:1337/graphql';
  const { data, isLoading } = useQuery(['locations', fetchVariables], async () => request(
    endpoint,
    query,
    fetchVariables
  ), useQueryOptions);

  return {
    data, isLoading
  }
};
