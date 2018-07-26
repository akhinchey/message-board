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
                <h3>Add A New Post</h3>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="title">Title * :</label>
                        <input type="text" required class="form-control"
                                                    id="title" placeholder="Post Title"
                                                    pattern="\S(.*\S)?"
                                                    ref={ (input) => {this.title = input} }/>
                    </div>
                    <div class="form-group">
                        <label for="name">Name * :</label>
                        <input type="text" required class="form-control"
                                                    id="name" placeholder="Name"
                                                    pattern="\S(.*\S)?"
                                                    ref={ (input) => {this.author = input} }/>
                    </div>
                    <div class="form-group">
                        <label for="name">Reply * :</label>                
                        <textarea required class="form-control"
                                        pattern="\S(.*\S)?"
                                        placeholder="Reply"
                                        ref={ (input) => {this.text = input} } />
                    </div>
                    <button className="btn btn-primary" type="submit">Add New Post</button>
                </form>
            </div>
        )
    }
}

export default withRouter(NewPostForm);
