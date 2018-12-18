/* eslint-disable no-unused-vars */
import React from 'react';
import chatIcon from '../../../public/chat.png';
import closeIcon from '../../../public/close.png';
import '../../styles/ChatButton.scss';
import PropTypes from 'prop-types';

function ChatButton(props) {
  let chatButtonIcon;
  let { isOpen, onClick } = props;

  chatButtonIcon = isOpen ? chatIcon : closeIcon;

  return (
    <div className='chat-button' onClick={() => onClick()}>
      <img src={chatButtonIcon} alt='chat-button' height='42' width='42' />
    </div>
  );
}
ChatButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ChatButton;