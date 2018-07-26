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
                <div class="form-group">
                    <label for="name">Name * :</label>
                    <input type="text" class="form-control" id="name" placeholder="Name" pattern="\S(.*\S)?" ref={ (input) => {this.author = input} }/>
                </div>
                {/* <input type="text"  required pattern="\S+" placeholder="author" ref={ (input) => {this.author = input} }/>
                <br /> */}
                <div class="form-group">
                    <label for="name">Reply * :</label>                
                    <textarea class="form-control" rows="3" required pattern="\S(.*\S)?" placeholder="Reply" ref={ (input) => {this.text = input} }></textarea>
                </div>
                {/* <textarea  required pattern="\S+" placeholder="post" ref={ (input) => {this.text = input} } /> */}
                <br />
                <button className="btn btn-primary" type="submit">Reply</button>
            </form>
        )
    }
}

export default NewReplyForm;
