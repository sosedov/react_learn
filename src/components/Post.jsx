import React from 'react';
import p_style from '../style/Posts.module.css'

const Post = (props) => {
    return (
            <div className={p_style.message_cont}>
                { props.message }
                <span className={p_style.message_like_icon}>&#9829;</span>
                <span className="message_like_count">{ props.likes }</span>
            </div>
    )
  }

export default Post;