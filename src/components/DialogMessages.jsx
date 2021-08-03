import React from 'react';
import {Route} from 'react-router-dom'
import DialogMessage from './DialogMessage'
import d_style from '../style/Dialogs.module.css'

/*const messages = [
    {
        "id" : 1,
        "text" : "Hi"
    },
    {
        "id" : 2,
        "text" : "How do you do"
    },
    {
        "id" : 3,
        "text" : "I'm fine Thanks"
    },
    {
        "id" : 4,
        "text" : "Fuck you"
    },
]*/

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