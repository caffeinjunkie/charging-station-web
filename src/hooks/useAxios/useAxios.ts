import axios from 'axios';

import config from '../../config';

const { endpoint: { REST_URL } } = config;

export const post = async (payload: any) => {
  const { path, body } = payload
  const { data: response } = await axios.post(`${REST_URL}${path}`, body);
  return response.data;
};

export const remove = async (payload: any) => {
  const { path } = payload
  const { data: response } = await axios.delete(`${REST_URL}${path}`);
  return response.data;
};
