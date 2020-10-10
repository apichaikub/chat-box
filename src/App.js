import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import firebase from './plugins/firebase';
import ChatBox from './components/Assemble/ChatBox';
import { USERID } from './helpers/constant/localStorage';

const Wrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const App = () => {
  
  const [messages, setMessage] = useState([])

  const getUserId = () => {
    return localStorage.getItem(USERID);
  };

  const setUserId = () => {
    return localStorage.setItem(USERID, uuidv4());
  };

  const handleSubmit = (value) => {
    if(value) {
      firebase.database().ref('/messages').push({
        message: value,
        userId: getUserId(),
      });
    }
  }

  useEffect(() => {
    if(!getUserId()) {
      setUserId();
    }
    
    firebase.database().ref('/messages').on('value', (snapshot) => {
      if(!snapshot.val()) return
      const data = snapshot.val()
      const keys = Object.keys(data);
      const messages = keys.map((key) => {
        const item = data[key]
        return {
          id: key,
          type: 'text',
          message: item.message,
          position: item.userId === getUserId() ? 'right' : 'left'
        };
      });
      setMessage(messages);
    });
  }, [])

  return (
    <Wrapper>
      <ChatBox
        messages={messages}
        onSubmit={handleSubmit}
      />
    </Wrapper>
  );
}

export default App;
