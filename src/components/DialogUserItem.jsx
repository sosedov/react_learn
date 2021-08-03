import React from 'react';
import {NavLink} from 'react-router-dom'
import d_style from '../style/Dialogs.module.css'

const DialogUserItem = (props) => {
    return (
        <div className={d_style.dialogItem}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
}

export default DialogUserItem;