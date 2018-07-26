import React from 'react';
import { Redirect } from 'react-router-dom';


const FullPost = (props) => {
    const post = props.post;

    if (!post) return <Redirect to="/posts" />;

    const replies = post.replies.map((reply, index) => {
        return (
            <div>
                <div>{reply.author} at {reply.date}</div>
                <div>{reply.text}</div>
            </div>
        )
    })

    return (
        <div>
            <h2>{post.title}</h2>
            <h3>Author: {post.author}</h3>
            <span>{post.date}</span>
            <br />
            <div>
                {post.text}
            </div>
            {replies}

        </div>
    )
}

export default FullPost;
