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
      <ChatBoxMessage />
    )
  }