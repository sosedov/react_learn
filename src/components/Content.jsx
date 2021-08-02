import React from 'react';
import Profile from './Profile';
import Posts from './Posts';
import {Route} from 'react-router-dom'

const Content = () => {
    return (
        <div className="content">
            <Route component={Profile} path='/profile'/>
            <Route component={Posts}  path='/posts'/>
      </div>
    )
  }

export default Content;