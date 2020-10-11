import React from 'react';
import { shallow } from 'enzyme';
import ChatBoxMessage from '../../../../components/Combine/ChatBoxMessage';
import '../../../configs/enzyme';

describe('UI Test: components > Base > Message', () => {
  it('should show total of messages correctly', () => {
    const wrapper = shallow(
        <ChatBoxMessage
        items={[
          {
            id: 1,
            message: 'Hi',
            type: 'text',
            position: 'left'
          },
          {
            id: 1,
            message: 'Hello',
            type: 'text',
            position: 'right'
          }
        ]}
      />
    );
    expect(wrapper.find('.item').length).toEqual(2);
  });
});