import React, { useState } from 'react';
import ChatBox from './components/Assemble/ChatBox';

function App() {
  const [messages, setMessage] = useState([
    {
      type: 'text',
      message: 'Hi',
      position: 'left'
    },
    {
      type: 'text',
      message: 'Hi',
      position: 'left'
    },
    {
      type: 'text',
      message: 'Hi',
      position: 'right'
    },
    {
      type: 'text',
      message: 'Hi',
      position: 'right'
    }
  ])

  const handleSubmit = (value) => {
    setMessage([...messages, {
      id: 1,
      type: 'text',
      message: value,
      position: 'right'
    }])
  }

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
