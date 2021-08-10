import React from 'react';
import DialogUsers from './DialogUsers'
import DialogMessages from './DialogMessages'
import d_style from '../style/Dialogs.module.css'
import { AddMessageActionCreator } from './../redux/dialogsReducer'
import {connect} from 'react-redux'



const Dialogs = (props) => {
    return (
            <div>
                <h3>Dialogs</h3>
                <div className={d_style.dialogs}>
                    <DialogUsers dialogs={props.dialogsReducer.dialogs}/>
                    <DialogMessages messages={props.dialogsReducer.messages} dispatch={props.dispatch}/>
                </div>
            </div>)
}


let mapStateToProps = (state) => {
    return {
        dialogsReducer : state.dialogsReducer
    }
}

let mapDispatchToProps = (store_dispatch) => {
    return {dispatch: {
            AddMessage : (text) => {
                let action = AddMessageActionCreator(text)
                store_dispatch(action)
            }
        }
    }
}

let DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsConteiner;