import React from 'react';
import {Route} from 'react-router-dom'
import DialogUsers from './DialogUsers'
import DialogMessages from './DialogMessages'
import d_style from '../style/Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div>
            <h3>Dialogs</h3>
            <div className={d_style.dialogs}>
                <DialogUsers dialogs={props.state.dialogs}/>
                <DialogMessages messages={props.state.messages}/>
            </div>
        </div>
    )
  }

export default Dialogs;