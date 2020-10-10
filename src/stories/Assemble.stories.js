import React from 'react';
import ChatBox from '../components/Assemble/ChatBox';

export default {
  title: 'Assemble',
};

export const chatBox = () => {
  return (
    <ChatBox
      messages={[
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
  )
}