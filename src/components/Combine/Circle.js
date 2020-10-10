import React from 'react';
import styled from 'styled-components';
 
const Wrapper = styled.button`
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

const Circle = (props) => {
  return (
    <Wrapper {...props}>
      <span>
        xxxx
      </span>
    </Wrapper>
  )
};

export default Circle;