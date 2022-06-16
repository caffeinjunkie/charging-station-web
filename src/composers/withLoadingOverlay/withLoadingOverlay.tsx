import React from 'react';
import { compose, withState } from 'recompose';
import { LoadingOverlay } from '../../components/LoadingOverlay';

import type { Props } from './withLoadingOverlay.type';
import config from './withLoadingOverlay.config';

const SubmissionLoadingOverlay = (ComposedComponent: any): Function => {
  const HOCLoadingOverlay = (props: Props) => {
    const { showLoadingOverlay } = props;
    return (
      <>
        <ComposedComponent {...props} />
        {showLoadingOverlay && <LoadingOverlay />}
      </>
    );
  };

  HOCLoadingOverlay.defaultProps = config.defaultProps;

  return HOCLoadingOverlay;
};

const withLoadingOverlay = (): Function => compose(
  withState('showLoadingOverlay', 'setShowLoadingOverlay', false),
  SubmissionLoadingOverlay
);

export default withLoadingOverlay;
