import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class NewPostForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let title = this.title.value;
        let author = this.author.value;
        let text = this.text.value;
        this.props.addNewPost(title, author, text)
        e.target.reset();
        const path = "/posts";
        this.props.history.push(path);
    }

    render () {
        return (
            <div className="post-container">
                <div className="post-form">

                    <h1 className="page-title">Add A New Post</h1>

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Title * :</label>
                            <input type="text"
                                   required className="form-control"
                                   pattern="\S(.*\S)?"
                                   ref={ (input) => {this.title = input} }/>
                        </div>
                        <div className="form-group">
                            <label>Author * :</label>
                            <input type="text"
                                   maxlength="50"
                                   required className="form-control"
                                   pattern="\S(.*\S)?"
                                   ref={ (input) => {this.author = input} }/>
                        </div>
                        <div className="form-group text-area">
                            <label>Post * :</label>                
                            <textarea required 
                                      className="form-control"
                                      rows="4"
                                      pattern="\S(.*\S)?"
                                      ref={ (input) => {this.text = input} } />
                        </div>
                        <div className="new-post-button-section">
                            <Link to="/">
                                <button className="btn btn-primary cancel">Cancel</button>
                            </Link>
                            <button className="btn btn-primary add-post" type="submit">Add New Post</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(NewPostForm);
