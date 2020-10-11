import React from 'react';
import { mount } from 'enzyme';
import Button from '../../../../components/Base/Button';
import '../../../configs/enzyme';

describe('UI Test: components > Base > Button', () => {
  it('should render text button correctly', () => {
    const wrapper = mount(<Button>Sent</Button>);
    expect(wrapper.getDOMNode().innerHTML).toEqual('Sent');
  });
});