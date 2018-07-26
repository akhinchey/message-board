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
            <form onSubmit={this.handleSubmit}>
                <input type="text" required pattern="\S+" placeholder="title" ref={ (input) => {this.title = input} }/>
                <br />
                <input type="text" required pattern="\S+" placeholder="author" ref={ (input) => {this.author = input} }/>
                <br />
                <textarea required pattern="\S+" placeholder="post" ref={ (input) => {this.text = input} } />
                <br />
                <button type="submit">Add New Post</button>
            </form>
        )
    }
}

export default withRouter(NewPostForm);
