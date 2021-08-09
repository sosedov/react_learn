import React from 'react';
import {Route} from 'react-router-dom'
import DialogUsers from './DialogUsers'
import DialogMessages from './DialogMessages'
import d_style from '../style/Dialogs.module.css'
import StoreContext from '../StoreContext'


const Dialogs = (props) => {
    return (
        <StoreContext.Consumer>{
        (store) => {
            return (<div>
                <h3>Dialogs</h3>
                <div className={d_style.dialogs}>
                    <DialogUsers dialogs={store.getState().dialogsReducer.dialogs}/>
                    <DialogMessages messages={store.getState().dialogsReducer.messages}   dispatch={store.dispatch}/>
                </div>
            </div>)
        }
        }</StoreContext.Consumer>
    )
  }

export default Dialogs;