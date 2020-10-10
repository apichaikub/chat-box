import React from 'react';
import styled from 'styled-components';
import ChatBoxInput from '../Combine/ChatBoxInput';
import ChatBoxMessage from '../Combine/ChatBoxMessage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, .2),0 2px 4px 0 rgba(0, 0, 0, .1);
  border-radius: 8px;
`

const Wrapper = styled.div`
  padding: 10px;
`

const ChatBox = ({ messages, onSubmit }) => {
  return (
    <Container>
      <ChatBoxMessage items={messages}/>
      <Wrapper>
        <ChatBoxInput onSubmit={onSubmit} />
      </Wrapper>
    </Container>
  )
}

export default ChatBox;