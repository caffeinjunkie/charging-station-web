import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import withLoadingOverlay from './withLoadingOverlay';

describe('withLoadingOverlay', () => {
  let wrapper: any;
  const Component = () => <div />;
  const LoadingOverlayComponent = withLoadingOverlay()(Component);
  const props = {
    setShowLoadingOverlay: jest.fn()
  }

  beforeEach(() => {
    wrapper = shallow(<LoadingOverlayComponent {...props} />);
  });

  it('should show LoadingOverlay when showLoadingOverlay is true', () => {
    wrapper.props().setShowLoadingOverlay(true);

    const loadingOverlayComponent = wrapper.dive().props().children[1];

    expect(loadingOverlayComponent).toBeTruthy();
  });

  it('should not show LoadingOverlay when showLoadingOverlay is false', () => {
    const loadingOverlayComponent = wrapper.dive().props().children[1];

    expect(loadingOverlayComponent).toBeFalsy();
  });
});
