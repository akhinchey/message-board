import React from 'react';
import { Redirect } from 'react-router-dom';
import NewReplyForm from './NewReplyForm';
import FullPostBody from './FullPostBody';
import ReplySection from './ReplySection';
import FullPostBottom from './FullPostBottom';


const FullPost = (props) => {
    const post = props.post;

    if (!post) return <Redirect to="/posts" />;

    return (
        <div className="post-container">

            <div className="full-post-container">
                <FullPostBody post={post} />
                <ReplySection replies={post.replies} />
                <NewReplyForm id={post.id} addNewReply={props.addNewReply} />
                <FullPostBottom />
            </div>


        </div>
    )
}

export default FullPost;
