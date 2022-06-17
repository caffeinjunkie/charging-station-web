import * as axios from 'axios';

import { post, remove } from './useAxios';

jest.mock('axios', () => ({
  post: () => {},
  delete: () => {}
}));


describe('useAxios', () => {
  describe('#post', () => {
    it('should return response data when post success', () => {
    
    });
  });
});
