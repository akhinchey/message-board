import React from 'react';
import { Link } from 'react-router-dom';


const ArrowLink = (props) => (
    <div className="icon">
        <Link to={props.linkURL}>
            <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
        </Link>
    </div>
)

export default ArrowLink;
