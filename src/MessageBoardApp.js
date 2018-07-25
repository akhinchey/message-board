import React, { Component } from 'react';
import './App.css';

import {
    addPostAction,
    addReplyAction
} from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sortedPosts } from './selectors';

import NavHeader from './NavHeader';
import PostCollection from './PostCollection';
import NewPostForm from './NewPostForm';


class MessageBoardAppContainer extends Component {

    render() {
        return (
            <div>
              <NavHeader />
              <PostCollection posts={this.props.posts} />
              <NewPostForm createNewPost={this.props.addPost} />
            </div>
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
