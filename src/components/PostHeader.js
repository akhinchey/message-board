import React from 'react';
import PostTitle from './PostTitle';


const PostHeader = (props) => (
    <div className="post-title-container">
        <PostTitle title={props.post.title}/>

        <div className="post-details">
            Author: <span className="bold-text">{props.post.author}</span> at {props.post.date}
        </div>
    </div>
)

export default PostHeader;
