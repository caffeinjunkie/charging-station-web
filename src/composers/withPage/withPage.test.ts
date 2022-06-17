import {
  compose, withHandlers, withProps, withState
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

    withPage(options)(component);

    expect(compose).toBeCalled();
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
    it('should call withLoadingOverlay when `withSubmissionLoading` is true', () => {
      const options: any = { withSubmissionLoading: true };

      withPage(options)(component);

      expect(withLoadingOverlay).toHaveBeenCalled();
    });

    it('should not call withLoadingOverlay when `withSubmissionLoading` is false', () => {
      const options = { withSubmissionLoading: false };

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
  
  describe('withProps', () => {
    it('should call withProps when `props` is present', () => {
      const options = { props: { isLoading: true } };
      
      withPage(options)(component);
      
      expect(withProps).toBeCalledWith(options.props);
    });
    
    it('should not call withProps when `props` is not present', () => {
      const options = {};
      
      withPage(options)(component);
      
      expect(withProps).not.toHaveBeenCalled();
    });
  });
  
  describe('withState', () => {
    it('should call withState when `state` is present', () => {
      const firstState = ['firstState', 'setFirstState', {}];
      const secondState = ['secondState', 'setSecondState', 0];
      const options: any = { state: [firstState, secondState] };
      
      withPage(options)(component);
      
      expect(withState).toHaveBeenNthCalledWith(1, ...firstState);
      expect(withState).toHaveBeenNthCalledWith(2, ...secondState);
    });
    
    it('should not call withState when `state` is not present', () => {
      const options = {};
      
      withPage(options)(component);
      
      expect(withState).not.toBeCalled();
    });
  });
});
