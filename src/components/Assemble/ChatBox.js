import React from 'react';
import styled from 'styled-components';
import ChatBoxInput from '../Combine/ChatBoxInput';
import ChatBoxMessage from '../Combine/ChatBoxMessage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const ChatBox = ({ messages, onSubmit }) => {
  return (
    <Container>
      <ChatBoxMessage items={messages}/>
      <ChatBoxInput onSubmit={onSubmit} />
    </Container>
  )
}

export default ChatBox;