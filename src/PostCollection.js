import React from 'react';

import ShortPost from './ShortPost';

const PostCollection = (props) => {

    const shortPosts = props.posts.map((post, index) => {
        return <ShortPost key={index}
                          title={post.title}
                          author={post.author}
                          text={post.text} />
    })

    return (
        <div>
            <ul>
                {shortPosts}
            </ul>
        </div>
    )
}


export default PostCollection;
