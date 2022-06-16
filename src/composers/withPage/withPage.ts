import {
  compose, withHandlers, withProps, withState
} from 'recompose';

import { Conditionals } from '../../utils';
import type { Options } from './withPage.type';
import withQuery from '../withQuery/withQuery';
import withLoadingOverlay from "../withLoadingOverlay";

const { isEmptyArray, isEmptyObject } = Conditionals;

const withPage = (options: Options): Function => (Component: any) => {
  const {
    props: propsOptions = {},
    state: stateOptions = [],
    handlers: handlersOptions = {},
    graphql: graphqlOptions = [],
    withSubmissionLoading = true
  } = options;
  const enhancers = [];
  
  if (!isEmptyArray(graphqlOptions)) {
    graphqlOptions.forEach((option) => {
      const { query = null, ...gqlOptions } = option;
      enhancers.push(withQuery({ query, options: gqlOptions.options }));
    });
  }
  
  if (!isEmptyObject(propsOptions)) {
    enhancers.push(withProps(propsOptions));
  }

  if (withSubmissionLoading) {
    enhancers.push(withLoadingOverlay());
  }
  
  if (!isEmptyArray(stateOptions)) {
    stateOptions.forEach((option) => {
      // @ts-ignore
      enhancers.push(withState(...option));
    });
  }
  
  if (!isEmptyObject(handlersOptions)) {
    enhancers.push(withHandlers(handlersOptions));
  }
  
  return compose(...enhancers)(Component);
};

export default withPage;
