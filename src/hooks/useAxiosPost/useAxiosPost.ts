import axios from 'axios';

import config from '../../config';

const { endpoint: { REST_URL } } = config;

export const post = async (payload: any) => {
  const { path, body } = payload
  const { data: response } = await axios.post(`${REST_URL}${path}`, body);
  console.log(response)
  return response.data;
};
