import {
  compose, withHandlers, withProps, withState
} from 'recompose';

import { Conditionals } from '../../utils';
import type { Options } from './withPage.type';
import withQuery from '../withQuery/withQuery';

const { isEmptyArray, isEmptyObject } = Conditionals;

const withPage = (options: Options): Function => (Component: any) => {
  const {
    props: propsOptions = {},
    state: stateOptions = [],
    handlers: handlersOptions = {},
    graphql: graphqlOptions = []
  } = options;
  const enhancers = [];
  
  if (!isEmptyArray(graphqlOptions)) {
    // let isMutationExist = false;
    graphqlOptions.forEach((option) => {
      const { query = null, mutation = null, ...gqlOptions } = option;
      enhancers.push(withQuery({ query, options: gqlOptions }));
      // enhancers.push(withMutation({ mutation, options: gqlOptions }));

      // if (isPresent(mutation)) {
      //   isMutationExist = true;
      // }
    });

    // if (isMutationExist) {
    //   enhancers.push(withLoadingOverlay());
    // }
  }
  
  if (!isEmptyObject(propsOptions)) {
    enhancers.push(withProps(propsOptions));
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
