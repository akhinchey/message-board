import React from 'react';
import PostHeader from './PostHeader';


const FullPostBody = (props) => (
    <div className="full-post">
        <PostHeader post={props.post} />

        <div className="post-text">
            {props.post.text}
        </div>
    </div>
)

export default FullPostBody;
