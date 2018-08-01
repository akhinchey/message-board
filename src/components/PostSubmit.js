import React from 'react';
import { Link } from 'react-router-dom';


const PostSubmit = () => (
    <div className="new-post-button-section">
        <Link to="/posts">
            <button className="btn btn-primary cancel">Cancel</button>
        </Link>
        <button className="btn btn-primary add-post" type="submit">Add New Post</button>
    </div>
)

export default PostSubmit;
