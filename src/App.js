import React, { useState, useEffect } from 'react';
import firebase from './plugins/firebase';
import ChatBox from './components/Assemble/ChatBox';

function App() {
  const [messages, setMessage] = useState([])

  const handleSubmit = (value) => {
    firebase.database().ref('/messages').push({
      message: value
    });
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
    <>
      <ChatBox
        messages={messages}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
