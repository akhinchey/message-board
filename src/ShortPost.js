import React from 'react';

const ShortPost = (props) => (
    <div>
        <h2>{props.title}</h2>
        <h3>Author: {props.author}</h3>
        <p>
            {props.text}
        </p>
    </div>
)

export default ShortPost;
