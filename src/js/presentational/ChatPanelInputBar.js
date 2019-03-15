/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import '../../styles/ChatPanelInputBar.scss';

class ChatPanelInputBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentMsg: ''
    }
  }

  render() {
    let { currentMsg } = this.state;
    return (
      <div className='input-bar'>
        <input className="msgInput" value={currentMsg} placeholder='input your message here.' onChange={(e) => {
          this.setState({
            currentMsg: e.target.value
          })
        }} />
        <span onClick={() => {
          this.props.sendMsg(currentMsg);
          this.setState({
            currentMsg: ''
          })
        }}> 发送 </span>
      </div>
    );
  }
}
export default ChatPanelInputBar;