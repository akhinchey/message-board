import React from 'react';
import ReplySubmit from './ReplySubmit';

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
            <div className="reply-form">
            <h5 className="reply-form-title">Add Reply:</h5>
                <form onSubmit={this.handleSubmit}>

                    <div className="reply-form-fields">
                        <label>Reply:</label>
                        <textarea required maxLength="250"
                                           className="form-control"
                                           pattern="\S(.*\S)?"
                                           ref={ (input) => {this.text = input} } />
                        <label>Name:</label>
                        <input type="text" required maxLength="50"
                                                    className="form-control"
                                                    pattern="\S(.*\S)?"
                                                    ref={ (input) => {this.author = input} }/>
                    </div>

                    <ReplySubmit />
                </form>
            </div>
        )
    }
}

export default NewReplyForm;
