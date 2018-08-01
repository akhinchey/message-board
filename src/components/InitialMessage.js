import React from 'react';

const InitialMessage = (props) => {

    if (props.messages) return null;

    return (
        <div className="initial-landing-message">
            There are currently no posts... Add one!
        </div>
    )
}

export default InitialMessage;
