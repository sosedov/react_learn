import React from 'react';
import Post from './Post';
import PostAdd from './PostAdd'
import p_style from '../style/Posts.module.css'
import { AddPostActionCreator } from './../redux/profileReducer'
import {connect} from 'react-redux'

const Posts = (props) => {
    let posts = props.profileReducer.posts.map(
        post => <Post key={`post_${post.id}`} id={post.id} message={post.message} likes={post.likes}/>
    )
    return (<div className="MyPosts">
        <h3>My Posts</h3>
        <PostAdd  dispatch={props.dispatch}/>
        {posts}
    </div>)
  }

  let mapStateToProps = (state) => {
    return {
        profileReducer : state.profileReducer
    }
}

let mapDispatchToProps = (store_dispatch) => {
    return {dispatch: {
            AddPost : (text) => {
                let action = AddPostActionCreator(text)
                store_dispatch(action)
            }
        }
    }
}

let PostsConteiner = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsConteiner;