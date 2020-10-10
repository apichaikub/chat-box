import React from 'react';
import Button from '../components/Base/Button';
import Input from '../components/Base/Input';
import Message from '../components/Base/Message';

export default {
  title: 'Base',
};

export const button = () => {
  return (
    <Button>Sent</Button>
  )
}

export const input = () => {
  return (
    <Input />
  )
}

export const message = () => {
  return (
    <Message type="text" value="Hi" position="left"/>
  )
}