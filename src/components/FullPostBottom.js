import React from 'react';
import { Link } from 'react-router-dom';
import NavButton from './NavButton';


const FullPostBottom = (props) => (
    <div className="bottom-button-section">
        <hr />
        <Link to="/posts">
            <NavButton buttonText={"Back To Posts"} extraClasses={"bottom-back-button"} />
        </Link>
    </div>
)

export default FullPostBottom;
