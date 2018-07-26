import React from 'react';


const FullPost = (props) => {
    const post = props.post;

    return (
        <div>
            <h2>{post.title}</h2>
            <h3>Author: {post.author}</h3>
            <span>{post.date}</span>
            <br />
            <div>
                {post.text}
            </div>
        </div>
    )
}

export default FullPost;
