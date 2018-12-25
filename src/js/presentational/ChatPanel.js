/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ChatPanel.scss';
import ChatPanelHeader from './ChatPanelHeader';
import ChatPanelContent from './ChatPanelContent';
import ChatPanelInputBar from './ChatPanelInputBar';


function ChatPanel(props) {
  let chatButtonIcon;
  let { isOpen } = props;
  let classNames = isOpen ? 'chat-panel' : 'chat-panel invisilbe';

  return (
    <div className={classNames}>
      <ChatPanelHeader headerText={'My Awesome Chat'}/>
      <ChatPanelContent/>
      <ChatPanelInputBar/>
    </div>
  );
}

ChatPanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
export default ChatPanel;