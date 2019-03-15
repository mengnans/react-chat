/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import '../../styles/ChatPanel.scss';
import ChatPanelHeader from './ChatPanelHeader';
import ChatPanelContent from './ChatPanelContent';
import ChatPanelInputBar from './ChatPanelInputBar';

class ChatPanel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      msgList: ['hi', 'how are you']
    }
    this.sendMsg = this.sendMsg.bind(this);
  }

  sendMsg(msg) {
    let { msgList } = this.state;
    this.setState({
      msgList: [...msgList, msg]
    })
  }
  render() {
    let chatButtonIcon;
    let { isOpen } = this.props;
    let { msgList } = this.state;
    let classNames = isOpen ? 'chat-panel' : 'chat-panel invisilbe';
    return (
      <div className={classNames}>
        <ChatPanelHeader headerText={'My Awesome Chat'} />
        <ChatPanelContent msgList={msgList} />
        <ChatPanelInputBar sendMsg={this.sendMsg} />
      </div>
    );
  }
}
ChatPanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
export default ChatPanel;