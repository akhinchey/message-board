import React from 'react';


const Reply = (props) => (
    <div>
        <div>{props.reply.author} at {props.reply.date}</div>
        <div>{props.reply.text}</div>
    </div>
);

export default Reply;
