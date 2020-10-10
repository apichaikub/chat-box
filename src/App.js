import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import firebase from './plugins/firebase';
import ChatBox from './components/Assemble/ChatBox';

const Wrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const App = () => {
  const [messages, setMessage] = useState([])

  const handleSubmit = (value) => {
    if(value) {
      firebase.database().ref('/messages').push({
        message: value
      }); 
    }
  }

  useEffect(() => {
    firebase.database().ref('/messages').on('value', function(snapshot) {
      if(!snapshot.val()) return
      const data = snapshot.val();
      const messages = Object.keys(data).map((key) => {
        return {
          id: key,
          type: 'text',
          message: snapshot.val()[key].message,
          position: 'left'
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
