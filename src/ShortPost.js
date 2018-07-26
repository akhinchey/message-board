import React from 'react';

const ShortPost = (props) => {
    const post = props.post;

    return (
        <div>
            <h2>{post.title}</h2>
            <p>
                {post.text}
            </p>
            <div>Author: {post.author} at {post.date}</div>
            <div>{post.replies.length} replies</div>
            <hr />
        </div>
    )
}

export default ShortPost;
