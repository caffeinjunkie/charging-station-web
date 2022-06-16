import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import PopupMenu from './PopupMenu.component';

describe('PopupMenu', () => {
  let wrapper: ShallowWrapper;
  const screenName = 'Screen';
  const name = 'Name';
  const buttons = [{
    text: 'text',
    onClick: jest.fn(),
    className: 'secondary',
    containerStyle: {}
  }];
  const props = {
    isOpen: true,
    onClickCloseButton: jest.fn(),
    screenName,
    name,
    buttons
  };

  beforeEach(() => {
    wrapper = shallow(<PopupMenu {...props} />);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('#render', () => {
    it('should render close button when rendered', () => {
      const closeButton = wrapper.find('CloseButton');

      expect(closeButton).toBeTruthy();
    });

    it('should render all button when rendered', () => {
      const button = wrapper.find('Button');

      expect(button).toBeTruthy();
    });
  });

  describe('#onClick', () => {
    it('should invoke onClick when button is clicked', () => {
      wrapper = shallow(<PopupMenu {...props} withButtons />);
      const button = wrapper.find('Button');

      button.simulate('click');

      expect(props.buttons[0].onClick).toBeCalled();
    });
  });
});
