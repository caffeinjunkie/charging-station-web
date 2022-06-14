import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import config from '../../config';

const { endpoint: { restUrl } } = config;

export const post = async (payload: any) => {
  const { path, body } = payload
  const { data: response } = await axios.post(`${restUrl}${path}`, body);
  return response.data;
};

export const useMutationRequest = async (payload: any) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(post, {
    onSuccess: data => {
      const message = "success"
      alert(message)
    },
    onError: () => {
      alert("there was an error")
    },
    onSettled: () => {
      queryClient.invalidateQueries('create');
    }
  });

  mutate(payload)
};
