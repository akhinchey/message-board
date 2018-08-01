import React from 'react';
import { Link } from 'react-router-dom';
import ShortPost from './ShortPost';


const PostCollection = (props) => {

    const shortPosts = props.posts.map((post, index) => {
        return <ShortPost key={index} post={post} />
    })

    return (
        <div className="post-container">
            <h1 className="page-title">Message Board</h1>
            {shortPosts}

            <div className="new-post-button-section">
                <Link to="/posts/new">
                    <button className="btn btn-primary">Add New Post</button>
                </Link>
            </div>
        </div>
    )
}


export default PostCollection;
