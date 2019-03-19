/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ChatPanelContent.scss';

function ChatPanelContent(props) {

  let { msgList } = props;
  let sendList = [];
  if (msgList && msgList.length > 0) {
    msgList.map((msg, key) => {
      sendList.push(
        <div className='msgText' key={key} style={{ color: 'red' }}>
          {msg}
        </div>
      );
    })
  }
  return sendList;
}

export default ChatPanelContent;