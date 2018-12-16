/* eslint-disable no-unused-vars */
import React from 'react';
import chatIcon from '../../../public/chat.png';
import closeIcon from '../../../public/close.png';
import { useState } from 'react';
import '../../styles/Chat.scss';

function ChatButton() {
  const [isOpen, setOpen] = useState(false);
  let chatButtonIcon;

  if (isOpen) {
    chatButtonIcon = chatIcon;
  } else {
    chatButtonIcon = closeIcon;
  }

  return (
    <div className='chat' onClick={() => setOpen(!isOpen)}>
      <img src={chatButtonIcon} alt='chat' height='42' width='42' />
    </div>
  );
}

export default ChatButton;