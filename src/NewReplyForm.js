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
                <form onSubmit={this.handleSubmit}>
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
                    <button className="btn btn-primary" type="submit">Reply</button>
                </form>
            </div>
        )
    }
}

export default NewReplyForm;
