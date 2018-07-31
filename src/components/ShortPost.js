import React from 'react';
import { Link } from 'react-router-dom';


const ShortPost = (props) => {
    const post = props.post;

    let replyBadge;

    if (post.replies.length) {
        replyBadge = (<span className="label label-info">{post.replies.length} Replies</span>)
    }

    return (
        <div className="short-post-container">
            <div className="details">
                <Link to={`posts/${post.id}`}>
                    <h2 className="post-title list">{post.title}</h2>
                </Link>

                <div className="post-details">
                    <span className="post-author">
                        Author: <span className="bold-text">{post.author}</span>
                    </span>
                    {replyBadge}
                    <span className="post-time">
                        Posted on: {post.date}
                    </span>
                </div>
            </div>
            <div class="icon">
            <Link to={`posts/${post.id}`}>
                <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
            </Link>
            </div>
        </div>
    )
}

export default ShortPost;
