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
  background-color: #f6d80e;
  border-radius: 18px;
  word-break: break-word;
  color: #58574e;
`;

const Message = ({ type, value, position }) => {
  return (
    <Container position={position}>
      { type === MESSAGE_TYPE.TEXT && <Text>{ value }</Text> }
    </Container>
  )
}

export default Message;