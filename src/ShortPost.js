import React from 'react';
import { Link } from 'react-router-dom';


const ShortPost = (props) => {
    const post = props.post;

    return (
        <div>
            <Link to={`posts/${post.id}`}>
                <h2 className="post-title">{post.title}</h2>
            </Link>

            <div className="post-details">
                Author: <span className="bold-text">{post.author}</span> at {post.date}
            </div>

            <span className="label label-info">{post.replies.length} replies</span>
            <hr />
        </div>
    )
}

export default ShortPost;
