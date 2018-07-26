import React from 'react';
import { Redirect } from 'react-router-dom';


const FullPost = (props) => {
    const post = props.post;

    if (!post) return <Redirect to="/posts" />;

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
