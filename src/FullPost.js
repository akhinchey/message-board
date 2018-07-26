import React from 'react';
import { Route } from 'react-router-dom';
import PostNotFound from './PostNotFound';


const FullPost = (props) => {
    const post = props.post;

    if (!post) return <Route component={PostNotFound} />

    return (
        <div>
            <h2>{post.title}</h2>
            <h3>Author: {post.author}</h3>
            <span>{post.date}</span>
            <br />
            <div>
                {post.text}
            </div>
        </div>
    )
}

export default FullPost;
