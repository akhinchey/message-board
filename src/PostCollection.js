import React from 'react';

import ShortPost from './ShortPost';

const PostCollection = (props) => {

    const shortPosts = props.posts.map((post, index) => {
        return <ShortPost key={index} post={post} />
    })

    return (
        <div className="post-container">
            {shortPosts}
        </div>
    )
}


export default PostCollection;
