/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ChatPanelHeader.scss';

function ChatPanelHeader(props) {
  let { headerText } = props;

  return (
    <div className='header'>
      <div className='text'>
        {headerText}
      </div>
    </div>
  );
}

ChatPanelHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
};
export default ChatPanelHeader;