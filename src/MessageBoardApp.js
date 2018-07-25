import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
    addPostAction,
    addReplyAction
} from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NavHeader from './NavHeader';
import PostCollection from './PostCollection';
import NewPostForm from './NewPostForm';


class MessageBoardAppContainer extends Component {
    render() {
        return (
            <div>
              <NavHeader />
              <PostCollection />
              <NewPostForm />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: addPostAction,
        addReply: addReplyAction
    }
}

const MessageBoardApp = connect(mapStateToProps, mapDispatchToProps)(MessageBoardAppContainer)

export default MessageBoardApp;
