import React from 'react';
import {Route} from 'react-router-dom'
import d_style from '../style/Dialogs.module.css'

const DialogMessage = (props) => {
    return (
            <div id={props.id} className={d_style.message}>{props.text}</div>
    )
  }

export default DialogMessage;