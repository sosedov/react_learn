import React from 'react';
import {NavLink} from 'react-router-dom'
import DialogUserItem from './DialogUserItem'
import d_style from '../style/Dialogs.module.css'

/*const DialogsUsers = [
    {
        "id":1,
        "name" : "Dima"
    },
    {
        "id":2,
        "name" : "Katya"
    },
    {
        "id":3,
        "name" : "Alisa"
    },
    {
        "id":4,
        "name" : "Maxim"
    }
]*/

const DialogUsers = (props) => {
    let DialogUserItems = props.dialogs.map(
        dialog => <DialogUserItem key={`dialog_${dialog.id}`} id={dialog.id} name={dialog.name} />
    );
    return (
            <div className={d_style.dialog_users}>
                {DialogUserItems}
            </div>
    )
  }

export default DialogUsers;