import React from 'react';
import styled from 'styled-components';
import { MESSAGE_TYPE } from '../../helpers/enum/message';

const Container = styled.div`
  display: flex;
  justify-content: ${props => props.position === 'right' ? 'flex-end' : 'flex-start'};
`
 
const Text = styled.div`
  padding-top: 7px;
  padding-right: 12px;
  padding-left: 12px;
  padding-bottom: 8px;
  background-color: rgb(0, 132, 255);
  border-radius: 18px;
  word-break: break-word;
  color: rgb(255, 255, 255);
`;

const Message = ({ type, value, position }) => {
  return (
    <Container position={position}>
      { type === MESSAGE_TYPE.TEXT && <Text>{ value }</Text> }
    </Container>
  )
}

export default Message;