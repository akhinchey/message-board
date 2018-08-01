import React from 'react';
import { Link } from 'react-router-dom';
import ShortPost from './ShortPost';
import NavButton from './NavButton';
import InitialMessage from './InitialMessage';


const PostCollection = (props) => {

    const shortPosts = props.posts.map((post, index) => {
        return <ShortPost key={index} post={post} />
    })

    return (
        <div className="post-container">
            <h1 className="page-title">Message Board</h1>
            <InitialMessage messages={props.posts.length} />
            {shortPosts}

            <div className="new-post-button-section">
                <Link to="/posts/new">
                    <NavButton buttonText={"Add New Post"}/>
                </Link>
            </div>
        </div>
    )
}


export default PostCollection;
