import React from 'react';
import Reply from './Reply';


const ReplySection = (props) => {

    const replies = props.replies.map((reply, index) => {
        return (
            <Reply key={index} reply={reply} />
        )
    })

    return (
        <div className="reply-section">
            <h4 className="reply-header">Replies ({props.replies.length}):</h4>
            {replies}
        </div>
    )
}

export default ReplySection;
