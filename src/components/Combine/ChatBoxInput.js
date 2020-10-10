import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Input from '../Base/Input';
import Button from '../Base/Button';

const Container = styled.div`
  display: flex;
`

const WrapperInput = styled.div`
  flex: 1;
`

const WrapperButton = styled.div`
  width: 80px;
`

const ChatBoxInput = ({ onSubmit }) => {
  const inputRef = useRef()
  const [value, setValue] = useState('')

  const handleInputKeyPress = (e) => {
    if(e.charCode === 13) {
      onSubmit(e.target.value)
      setValue('')
    }
  }

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const handleButtonClick = () => {
    onSubmit(value)
    setValue('')
    inputRef.current.focus()
  }

  return (
    <Container>
      <WrapperInput>
        <Input ref={inputRef} onKeyPress={handleInputKeyPress} onChange={handleInputChange} value={value}/>
      </WrapperInput>
      <WrapperButton>
        <Button onClick={handleButtonClick}>Sent</Button>
      </WrapperButton>
    </Container>
  );
}

export default ChatBoxInput;
