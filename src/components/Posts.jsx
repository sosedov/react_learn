import React from 'react';
import Post from './Post';
import PostAdd from './PostAdd'
import p_style from '../style/Posts.module.css'

const Posts = (props) => {
    let posts = props.state.posts.map(
        post => <Post key={`post_${post.id}`} id={post.id} message={post.message} likes={post.likes}/>
    )
    return (
        <div className="MyPosts">
            <h3>My Posts</h3>
            <PostAdd />
            {posts}
        </div>
    )
  }

export default Posts;