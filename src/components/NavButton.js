import React from 'react';

const NavButton = (props) => {

    const classNames = props.extraClasses ?
                       "btn btn-primary " + props.extraClasses
                       : "btn btn-primary";
    return (
        <button className={classNames}>{props.buttonText}</button>
    )
}

export default NavButton;
