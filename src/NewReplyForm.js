import React from 'react';


class NewReplyForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let author = this.author.value;
        let text = this.text.value;
        this.props.addNewReply(author, text, this.props.id);
        e.target.reset()
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"  required pattern="\S+" placeholder="author" ref={ (input) => {this.author = input} }/>
                <br />
                <textarea  required pattern="\S+" placeholder="post" ref={ (input) => {this.text = input} } />
                <br />
                <button type="submit">Reply</button>
            </form>
        )
    }
}

export default NewReplyForm;
