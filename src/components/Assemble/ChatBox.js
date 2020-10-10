import React, { useState } from 'react';
import styled from 'styled-components';
import ChatBoxInput from '../Combine/ChatBoxInput';
import ChatBoxMessage from '../Combine/ChatBoxMessage';
import Circle from '../Combine/Circle';

const ContainerChat = styled.div`
  position: fixed;
  bottom: 90px;
  right: 20px;
  display: flex;
  flex-direction: column;
  width: 300px;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, .2),0 2px 4px 0 rgba(0, 0, 0, .1);
  border-radius: 8px;
  visibility: hidden;
  transform: scale(0); 

  &.show {
    visibility: visible;
    transition: all .2s ease-in-out;
    transform: scale(1); 
  }
`

const WrapperInput = styled.div`
  padding: 10px;
`

const WrapperCircle = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  
  button {
    background-color: #f6d80e;
  }

  svg {
    color: rgba(255, 255, 255, .5);
  }

  &.show svg {
    color: rgba(255, 255, 255, 1);
  }
`

const ChatBox = ({ messages, onSubmit }) => {
  const [showChatBox, setShowChatBox] = useState(true);

  const handleClickCircle = () => {
    setShowChatBox(!showChatBox)
  };

  return (
    <>
      <ContainerChat className={showChatBox ? 'show' : ''}>
        <ChatBoxMessage items={messages}/>
        <WrapperInput>
          <ChatBoxInput onSubmit={onSubmit} />
        </WrapperInput>
      </ContainerChat>
      <WrapperCircle className={showChatBox ? 'show' : ''}>
        <Circle onClick={handleClickCircle}/>
      </WrapperCircle>
    </>
  )
}

export default ChatBox;