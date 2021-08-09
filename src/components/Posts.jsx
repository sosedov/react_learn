import React from 'react';
import Post from './Post';
import PostAdd from './PostAdd'
import p_style from '../style/Posts.module.css'
import StoreContext from '../StoreContext'

const Posts = () => {
    
    return (
        <StoreContext.Consumer>{
            (store) => {
            let posts = store.getState().profileReducer.posts.map(
                post => <Post key={`post_${post.id}`} id={post.id} message={post.message} likes={post.likes}/>
            )
            return (<div className="MyPosts">
                <h3>My Posts</h3>
                <PostAdd  dispatch={store.dispatch}/>
                {posts}
            </div>)
            }
        }
            
        </StoreContext.Consumer>
    )
  }

export default Posts;