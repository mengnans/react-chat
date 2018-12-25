/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ChatPanelContent.scss';

function ChatPanelContent(props) {

  return (
    <div className='content'>
        content
    </div>
  );
}

ChatPanelContent.propTypes = {
  headerText: PropTypes.string.isRequired,
};
export default ChatPanelContent;