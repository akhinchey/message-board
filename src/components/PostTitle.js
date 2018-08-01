import React from 'react';
import { Link } from 'react-router-dom';
import NavButton from './NavButton';


const PostTitle = (props) => (
    <div>
        <h2 className="post-title">{props.title}</h2>
        <Link to="/posts">
            <NavButton buttonText={"Back To Posts"} extraClasses={"top-back-button"} />
        </Link>
    </div>
)

export default PostTitle;
