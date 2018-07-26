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
            <div className="reply-form">
            <h5 className="reply-form-title">Add Reply:</h5>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name * :</label>
                        <input type="text" required className="form-control"
                                                    pattern="\S(.*\S)?"
                                                    ref={ (input) => {this.author = input} }/>
                    </div>
                    <div className="form-group">
                        <label>Reply * :</label>                
                        <textarea required className="form-control"
                                        pattern="\S(.*\S)?"
                                        ref={ (input) => {this.text = input} } />
                    </div>
                    <button className="btn btn-primary" type="submit">Reply</button>
                </form>
            </div>
        )
    }
}

export default NewReplyForm;
