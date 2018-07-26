import React from 'react';
import { Link } from 'react-router-dom';


const ShortPost = (props) => {
    const post = props.post;

    return (
        <div>
            <Link to={`posts/${post.id}`}>
                <h2>{post.title}</h2>
                <p>
                    {post.text}
                </p>
            </Link>
            <div>Author: {post.author} at {post.date}</div>
            <div>{post.replies.length} replies</div>
            <hr />
        </div>
    )
}

export default ShortPost;
