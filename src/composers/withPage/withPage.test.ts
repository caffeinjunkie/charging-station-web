import {
  compose, withHandlers
} from 'recompose';

import withPage from './withPage';
import withQuery from '../withQuery/withQuery';
import withLoadingOverlay from '../withLoadingOverlay/withLoadingOverlay';

jest
  .mock('recompose')
  .mock('../withQuery/withQuery', () => jest.fn())
  .mock('../withLoadingOverlay/withLoadingOverlay', () => jest.fn());

describe('withPage', () => {
  const component = 'Component';
  const composeCallback = jest.fn();
  const composeResult = {};

  beforeEach(() => {
    composeCallback.mockReturnValue(composeResult);
    // @ts-ignore
    compose.mockReturnValue(composeCallback);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should invoke composeCallback and return composeResult', () => {
    const options = {};

    const result = withPage(options)(component);

    expect(composeCallback).toBeCalledWith(component);
    expect(result).toEqual(composeResult);
  });

  it('should invoke compose with empty enhancers when options is empty', () => {
    const options = {};
    const enhancers:any = [];

    withPage(options)(component);

    expect(compose).toBeCalledWith(...enhancers);
  });

  describe('withHandlers', () => {
    it('should call withHandlers when `handlers` is present', () => {
      const options = {
        handlers: {
          mapData: jest.fn()
        }
      };

      withPage(options)(component);

      expect(withHandlers).toBeCalledWith(options.handlers);
    });

    it('should not call withHandlers when `handlers` is not present', () => {
      const options = {};

      withPage(options)(component);

      expect(withHandlers).not.toHaveBeenCalled();
    });
  });
  
  describe('withLoadingOverlay', () => {
    it('should call withLoadingOverlay when `withSubmissionLoading` is present', () => {
      const options: any = { withSubmissionLoading: true };

      withPage(options)(component);

      expect(withLoadingOverlay).toHaveBeenCalled();
    });

    it('should not call withLoadingOverlay when `withSubmissionLoading` is not present', () => {
      const options = {};

      withPage(options)(component);

      expect(withLoadingOverlay).not.toBeCalled();
    });
  });
  
  describe('withQuery', () => {
    it('should call withQuery when `query` is present', () => {
      const queryOptions = { query: '', options: '' };
      
      const options = {
        graphql: [queryOptions]
      };
      
      withPage(options)(component);
      
      expect(withQuery).toBeCalledWith(queryOptions);
    });
    
    it('should not call withQuery when `query` is not present', () => {
      const options = {};
      
      withPage(options)(component);
      
      expect(withQuery).not.toHaveBeenCalled();
    });
  });
});
