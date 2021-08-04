import React from 'react';
import d_style from '../style/Dialogs.module.css'

const DialogAddMessage = (props) => {
    let new_message_text = React.createRef()

    const AddMessage = () => {
        let action = {
            type: 'ADD-MESSAGE',
            message: new_message_text.current.value
        }
        if(action.message.replaceAll(" ","").length > 0){
            props.dispatch(action)//;addPost(post);
            new_message_text.current.value = ""
        }
    }
    return (
            <div>
                <textarea ref={new_message_text}></textarea>
                <button onClick={AddMessage}>Отправить сообщение</button>
            </div>
    )
  }

export default DialogAddMessage;