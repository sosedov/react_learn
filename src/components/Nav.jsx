import React from 'react';
import {NavLink} from 'react-router-dom'
import st from "../style/Nav.module.css"

const Nav = () => {
    return (
        <nav className="nav">
        <div>
          <NavLink exact to="/profile" className={st.item}>Profile</NavLink>
        </div>
        <div>
          <NavLink to="/posts" className={st.item}>Posts</NavLink>
        </div>
        <div>
          <NavLink to="/dialogs" className={st.item}>Dialogs</NavLink>
        </div>
        <div>
          <NavLink to="/" className={st.item}>News</NavLink>
        </div>
      </nav>
    )
  }

export default Nav;