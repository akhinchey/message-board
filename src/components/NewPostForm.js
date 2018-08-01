import React from 'react';
import { withRouter } from 'react-router-dom';
import PostSubmit from './PostSubmit';


class NewPostForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let title = this.title.value;
        let author = this.author.value;
        let text = this.text.value;
        this.props.addNewPost(title, author, text)
        e.target.reset();
        const path = `/posts/${this.props.postCount + 1}`;
        this.props.history.push(path);
    }

    render () {
        return (
            <div className="post-container">
                <div className="post-form">

                    <h1 className="page-title">Add A New Post</h1>

                    <form onSubmit={this.handleSubmit}>

                            <label>Title * :</label>
                            <input required type="text"
                                            className="form-control"
                                            pattern="\S(.*\S)?"
                                            ref={ (input) => {this.title = input} }/>
                            <label>Author * :</label>
                            <input required type="text"
                                            maxLength="50"
                                            className="form-control"
                                            pattern="\S(.*\S)?"
                                            ref={ (input) => {this.author = input} }/>
                            <label>Post * :</label>                
                            <textarea required className="form-control"
                                               rows="4"
                                               pattern="\S(.*\S)?"
                                               ref={ (input) => {this.text = input} } />
                    <PostSubmit />
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(NewPostForm);
