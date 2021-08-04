import React from 'react';
import {Route} from 'react-router-dom'
import DialogMessage from './DialogMessage'
import DialogAddMessage from './DialogAddMessage'
import d_style from '../style/Dialogs.module.css'

const DialogMessages = (props) => {
    let messagesItems = props.messages.map(
        message => <DialogMessage key={`message_${message.id}`} id={message.id} text={message.text} />
    )
    return (
        <div className={d_style.dialog_messages}>
            {messagesItems}
            <DialogAddMessage   dispatch={props.dispatch}/>
        </div>
    )
  }

export default DialogMessages;