import React from 'react';
import ChatBoxInput from '../components/Combine/ChatBoxInput';
import ChatBoxMessage from '../components/Combine/ChatBoxMessage';

export default {
  title: 'Combine',
};

export const chatBoxInput = () => {
  return (
    <ChatBoxInput>Sent</ChatBoxInput>
  )
}

export const chatBoxMessage = () => {
    return (
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
    )
  }