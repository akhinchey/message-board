import React from 'react';
import ShortPost from './ShortPost';


const PostCollection = (props) => {

    const shortPosts = props.posts.map((post, index) => {
        return <ShortPost key={index} post={post} />
    })

    return (
        <div className="post-container">
        <h1 className="page-title">Message Board</h1>
            {shortPosts}
        </div>
    )
}


export default PostCollection;
