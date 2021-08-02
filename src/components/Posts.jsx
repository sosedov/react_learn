import React from 'react';
import Post from './Post';

const Posts = () => {
    return (
        <div className="MyPosts">
            <div>
                My Posts
            </div>
            <button>Add post</button>
            <Post message="Hi! How are you?" />
            <Post message="I am  fine" />
            <Post message="Thank you" />
            <Post message="And what about you" />
            <Post message="Great" />
        </div>
    )
  }

export default Posts;