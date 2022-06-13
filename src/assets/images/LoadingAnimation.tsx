import React from 'react';

import loadingSvg from './loadingSvg.svg';

const LoadingAnimation = (props: any) => (
  <img
    src={loadingSvg}
    alt=""
    {...props}
  />
);

export default LoadingAnimation;
