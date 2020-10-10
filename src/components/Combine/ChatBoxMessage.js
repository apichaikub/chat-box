import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Message from '../Base/Message';
import { getElmHeight } from '../../helpers/dom/getElmHeight';

const wrapperClassName = 'item';

const Container = styled.div`
  position: relative;
  height: 300px;
  padding: 10px;
  overflow-y: auto;
  background-color: #eee;
`

const Wrapper = styled.div`
  margin-bottom: 10px;
`

const AlertNewMessage = styled.div`
  width: 80%;
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px;
  text-align: center;
  font-size: 13px;
  color: #999;
  background-color: #ccc;
  border-radius: 5px;
`

const ChatBoxMessage = ({ items }) => {
  const containerRef = useRef();
  const [itemsHeight, setItemsHeight] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasNewMessage, setHasNewMessages] = useState(false)

  useEffect(() => {
    setItemsHeight((() => {
      let height = 0;
      const itemsElement = containerRef.current.querySelectorAll(`.${wrapperClassName}`);
      itemsElement.forEach(element => {
        height += getElmHeight(element)
      });
      return height;
    })());

    if((lastScrollY - containerRef.current.scrollTop) > 50) {
      console.log('you have new msg')
      setHasNewMessages(true);
    } else {
      containerRef.current.scrollTo(0, itemsHeight);
      setLastScrollY(containerRef.current.scrollTop);
      setHasNewMessages(false);
    }
  }, [items, itemsHeight, containerRef, lastScrollY]);

  const handleScroll = () => {
    setHasNewMessages(false);
  }

  return (
    <Container
      ref={containerRef}
      onScroll={handleScroll}
    >
      { hasNewMessage &&
        <AlertNewMessage>
          You have new messge bellow
        </AlertNewMessage>
      }
      { items.map(({ message, position }, index) => (
        <Wrapper
          key={index}
          className={wrapperClassName}
        >
          <Message
            value={message}
            position={position}
            type="text"
          />
        </Wrapper>
      )) }
    </Container>
  );
}

export default ChatBoxMessage;
