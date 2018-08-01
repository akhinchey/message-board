import React from 'react';
import { Redirect, Link } from 'react-router-dom';
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

            <div className="full-post-container">
                <div className="full-post">

                <div className="post-title-container">
                    <h2 className="post-title">{post.title}</h2>
                    <Link to="/posts">
                        <button className="btn btn-primary top-back-button">Back To Posts</button>
                    </Link>
                </div>
                
                    <div className="post-details">
                        Author: <span className="bold-text">{post.author}</span> at {post.date}
                    </div>
                    <div className="post-text">
                        {post.text}
                    </div>
                </div>
                <hr />

                <div className="reply-section">
                    <h4 className="reply-header">Replies ({post.replies.length}):</h4>
                    {replies}
                </div>
                <br />
                <NewReplyForm id={post.id} addNewReply={props.addNewReply} />

                <div className="bottom-button-section">
                <hr />
                    <Link to="/posts">
                        <button className="btn btn-primary bottom-back-button">Back To Posts</button>
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default FullPost;
