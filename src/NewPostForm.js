import React from 'react';

class NewPostForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let title = this.title.value;
        let author = this.author.value;
        let text = this.text.value;
        this.props.createNewPost(title, author, text)
        e.target.reset();
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="title" ref={ (input) => {this.title = input} }/>
                <br />
                <input type="text" placeholder="author" ref={ (input) => {this.author = input} }/>
                <br />
                <textarea placeholder="post" ref={ (input) => {this.text = input} } />
                <br />
                <button type="submit">Add New Post</button>
            </form>
        )
    }
}

export default NewPostForm;