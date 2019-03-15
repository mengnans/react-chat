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
    this.handleEnterKey = this.handleEnterKey.bind(this);
    this.sendMsg = this.sendMsg.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleEnterKey);
  }

  handleEnterKey(e) {
    if (e.keyCode === 13) {
      this.sendMsg();
    }
  }
  sendMsg() {
    let { currentMsg } = this.state;
    if (currentMsg.length > 0) {
      this.props.sendMsg(currentMsg);
      this.setState({
        currentMsg: ''
      })
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
        <span onClick={this.sendMsg}> 发送 </span>
      </div>
    );
  }
}
export default ChatPanelInputBar;