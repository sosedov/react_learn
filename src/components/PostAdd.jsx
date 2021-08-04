import React from 'react';
import p_style from '../style/Posts.module.css'

const PostAdd = (props) => {
    let newPostEl = React.createRef()

    let addPost = () => {
        let post = newPostEl.current.value
        const action = {type:'ADD-POST', message:post}
        props.dispatch(action)//;addPost(post);
        newPostEl.current.value = ""
    }
    return (
        <div className={p_style.add_post}>
            <textarea ref={newPostEl} className="new_post" rows="3"></textarea>
            <button onClick={addPost}>Add post</button>
        </div>
    )
  }

export default PostAdd;