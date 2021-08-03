import React from 'react';
import {Route} from 'react-router-dom'
import d_style from '../style/Dialogs.module.css'

const DialogUsers = () => {
    return (
            <div className={d_style.dialog_users}>
                <div className={d_style.dialogItem}>
                    Dima
                </div>
                <div className={d_style.dialogItem}>
                    Katya
                </div>
                <div className={d_style.dialogItem}>
                    Alisa
                </div>
                <div className={d_style.dialogItem}>
                    Maxim
                </div>
            </div>
    )
  }

export default DialogUsers;