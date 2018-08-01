import React from 'react';
import ReplyBadge from './ReplyBadge';


const ShortPostDetails = (props) => (
    <div className="post-details">
        <span className="post-author">
            Author: <span className="bold-text">{props.post.author}</span>
        </span>
        <ReplyBadge replyCount={props.post.replies.length} />
        <span className="post-time">
            Posted on: {props.post.date}
        </span>
    </div>
)

export default ShortPostDetails;
