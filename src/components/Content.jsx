import React from 'react';
import Profile from './Profile';
import Posts from './Posts';
import Dialogs from './Dialogs'
import {Route} from 'react-router-dom'

const Content = () => {
    return (
        <div className="content">
            <Route component={Profile} path='/profile'/>
            <Route path='/posts' render={() => <Posts/>} />
            <Route path='/dialogs' render={() => <Dialogs/>}/>
      </div>
    )
  }

export default Content;