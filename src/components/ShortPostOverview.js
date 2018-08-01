import React from 'react';
import { Link } from 'react-router-dom';
import ShortPostDetails from './ShortPostDetails';


const ShortPostOverview = (props) => {
    const post = props.post;

    return (
        <div className="details">
            <Link to={`posts/${post.id}`}>
                <h2 className="post-title list">{post.title}</h2>
            </Link>
    
            <ShortPostDetails post={post} />
        </div>
    )
}



export default ShortPostOverview;
