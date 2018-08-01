import React from 'react';


const ReplyBadge = (props) => {

    if (!props.replyCount) return null;

    return (
        <span className="label label-info">{props.replyCount} Replies</span>
    )
}

export default ReplyBadge;
