/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ChatPanelInputBar.scss';

function ChatPanelInputBar(props) {

  return (
    <div className='input-bar'>
      <div className='text default'>
        Input your message here.
      </div>
    </div>
  );
}

export default ChatPanelInputBar;