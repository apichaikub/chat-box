import React from 'react';
import styled from 'styled-components';
import Icon from '../Base/Icon';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
 
const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
`;

const WrapperIcon = styled.span`
  font-size: 24px;
  color: #111;
`

const Circle = (props) => {
  return (
    <Container {...props}>
      <WrapperIcon>
        <Icon icon={faLightbulb} />
      </WrapperIcon>
    </Container>
  )
};

export default Circle;