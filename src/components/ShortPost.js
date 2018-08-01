import React from 'react';
import ArrowLink from './ArrowLink';
import ShortPostOverview from './ShortPostOverview';


const ShortPost = (props) => {
    const post = props.post;

    return (
        <div className="short-post-container">
            <ShortPostOverview post={post} />
            <ArrowLink linkURL={`posts/${post.id}`} />
        </div>
    )
}

export default ShortPost;
