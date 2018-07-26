import React from 'react';


const Reply = (props) => (
    <div className="reply">
        <div><span className="bold-text">{props.reply.author}</span> at {props.reply.date}</div>
        <div className="reply-text">{props.reply.text}</div>
    </div>
);

export default Reply;
