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
                <h1 className="post-title">{post.title}</h1>
                <div className="post-details">
                    Author: <span className="bold-text">{post.author}</span> at {post.date}
                </div>
                <div className="post-text">
                    {post.text}
                </div>
            </div>
            <div className="reply-section">
                <h4 className="reply-header">Replies ({post.replies.length}):</h4>
                {replies}
                <br />
                <NewReplyForm id={post.id} addNewReply={props.addNewReply} />
            </div>

        </div>
    )
}

export default FullPost;
