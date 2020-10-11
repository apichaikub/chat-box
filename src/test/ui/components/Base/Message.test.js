import React from 'react';
import { mount } from 'enzyme';
import Message from '../../../../components/Base/Message';
import '../../../configs/enzyme';

describe('UI Test: components > Base > Message', () => {
  it('should render text message correctly', () => {
    const wrapper = mount(<Message type="text" value="Hi" position="left"/>);
    expect(wrapper.getDOMNode().querySelector('div').innerHTML).toEqual('Hi');
  });
});