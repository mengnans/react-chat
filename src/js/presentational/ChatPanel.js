/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ChatPanel.scss';


function ChatPanel(props) {
  let chatButtonIcon;
  let { isOpen } = props;
  let children = isOpen ?
    <div className="chat-panel">
      Panel
    </div>
    :
    null;

  return (
    <div>
      {children}
    </div>
  );
}

ChatPanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
export default ChatPanel;