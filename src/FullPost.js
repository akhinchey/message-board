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
        <div>
            <div>
                <h2>{post.title}</h2>
                <h3>Author: {post.author}</h3>
                <span>{post.date}</span>
                <br />
                <div>
                    {post.text}
                </div>
            </div>
                <NewReplyForm id={post.id} addNewReply={props.addNewReply} />
                {replies}

        </div>
    )
}

export default FullPost;
