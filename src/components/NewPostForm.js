import React from 'react';
import { withRouter } from 'react-router';


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

                    <h3 className="page-title">Add A New Post</h3>

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group short-field">
                            <label>Title * :</label>
                            <input type="text"
                                   required className="form-control"
                                   pattern="\S(.*\S)?"
                                   ref={ (input) => {this.title = input} }/>
                        </div>
                        <div className="form-group short-field">
                            <label>Author * :</label>
                            <input type="text" 
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
                        <button className="btn btn-primary" type="submit">Add New Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(NewPostForm);
