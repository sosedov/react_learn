import React from 'react';
import Profile from './Profile';
import Posts from './Posts';
import Dialogs from './Dialogs'
import {Route} from 'react-router-dom'

const Content = (props) => {
    return (
        <div className="content">
            <Route component={Profile} path='/profile'/>
            <Route path='/posts' render={() => <Posts state={props.state}  dispatch={props.dispatch}/>} />
            <Route path='/dialogs' render={() => <Dialogs state={props.state}/>}/>
      </div>
    )
  }

export default Content;