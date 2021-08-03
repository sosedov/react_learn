import React from 'react';
import {Route} from 'react-router-dom'
import DialogMessage from './DialogMessage'
import d_style from '../style/Dialogs.module.css'

const DialogMessages = (props) => {
    let messagesItems = props.messages.map(
        message => <DialogMessage key={`message_${message.id}`} id={message.id} text={message.text} />
    )
    return (
        <div className={d_style.dialog_messages}>
            {messagesItems}
        </div>
    )
  }

export default DialogMessages;