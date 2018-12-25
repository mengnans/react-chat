/* eslint-disable no-unused-vars */
import React from 'react';
import { useReducer } from 'react';
import { INITIAL_STATE, chatReducer } from '../reducers/chatReducer';
import ChatButton from '../presentational/ChatButton';
import ChatPanel from '../presentational/ChatPanel';
import { TOGGLE_CHAT } from '../constants/actions-types';
import '../../styles/ChatContainer.scss';


function ChatContainer() {
  let reducer = {};
  let [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
  
  const onChatButtonClick = ()=>{
    dispatch({type: TOGGLE_CHAT});
  };

  return (
    <div className='chat-container'>
      <ChatPanel isOpen={state.isOpen} />
      <ChatButton isOpen={state.isOpen} onClick={onChatButtonClick} />
    </div>
  );
}




export default ChatContainer;