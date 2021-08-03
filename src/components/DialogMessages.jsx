import React from 'react';
import {Route} from 'react-router-dom'
import d_style from '../style/Dialogs.module.css'

const DialogMessages = () => {
    return (
        <div className={d_style.dialog_messages}>
            <div className={d_style.message}>Hi</div>
            <div className={d_style.message}>You</div>
            <div className={d_style.message}>Fuck you</div>
        </div>
    )
  }

export default DialogMessages;