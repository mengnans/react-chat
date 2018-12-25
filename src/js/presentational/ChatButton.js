/* eslint-disable no-unused-vars */
import React from 'react';
import openIcon from '../../../public/open.png';
import closeIcon from '../../../public/close.png';
import '../../styles/ChatButton.scss';
import PropTypes from 'prop-types';

function ChatButton(props) {
  let chatButtonIcon, classNames;
  let { isOpen, onClick } = props;

  chatButtonIcon = isOpen ? openIcon : closeIcon;
  classNames = isOpen ? 'chat-button open' : 'chat-button';

  return (
    <img src={chatButtonIcon} alt='chat-button' className={classNames} onClick={() => onClick()} height='42' width='42' />
  );
}
ChatButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ChatButton;