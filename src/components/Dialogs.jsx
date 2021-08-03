import React from 'react';
import {Route} from 'react-router-dom'
import DialogUsers from './DialogUsers'
import DialogMessages from './DialogMessages'
import d_style from '../style/Dialogs.module.css'

const Dialogs = () => {
    return (
        <div>
            <h3>Dialogs</h3>
            <div className={d_style.dialogs}>
                <DialogUsers />
                <DialogMessages />
            </div>
        </div>
    )
  }

export default Dialogs;