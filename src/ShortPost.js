import React from 'react';

const ShortPost = (props) => (
    <div>
        <h2>{props.title}</h2>
        <p>
            {props.text}
        </p>
        <h3>Author: {props.author}</h3>
        <hr />
    </div>
)

export default ShortPost;
