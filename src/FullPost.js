import React from 'react';
import { Redirect } from 'react-router-dom';

import NewReplyForm from './NewReplyForm';
import Reply from './Reply';


const FullPost = (props) => {
    const post = props.post;

    if (!post) return <Redirect to="/posts" />;

    const replies = post.replies.map((reply, index) => {
        return (
            <Reply key={index} reply={reply} />
        )
    })

    return (
        <div className="post-container">
            <div className="full-post">
                <h2 className="post-title">{post.title}</h2>
                <div className="post-details">
                    Author: <span className="post-author">{post.author}</span> at {post.date}
                </div>
                <div className="post-text">
                    {post.text}
                </div>
            </div>
                <NewReplyForm id={post.id} addNewReply={props.addNewReply} />
                {replies}

        </div>
    )
}

export default FullPost;
