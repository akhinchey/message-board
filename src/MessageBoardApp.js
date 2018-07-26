import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
    addPostAction,
    addReplyAction
} from './actions';

import MessageBoardAppComponent from './MessageBoardAppComponent';
import { sortedPosts } from './selectors';


class MessageBoardAppContainer extends Component {

    render() {
        return (
            <MessageBoardAppComponent posts={this.props.posts} 
                                      addPost={this.props.addPost}
                                      addReply={this.props.addReply} />
        );
    }
}


const mapStateToProps = (state) => {
    return {
        posts: sortedPosts(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addPost: addPostAction,
        addReply: addReplyAction
    }, dispatch)
}

const MessageBoardApp = connect(mapStateToProps, mapDispatchToProps)(MessageBoardAppContainer)

export default MessageBoardApp;
