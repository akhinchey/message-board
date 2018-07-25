import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavHeader from './NavHeader';
import PostCollection from './PostCollection';
import NewPostForm from './NewPostForm';


class MessageBoardApp extends Component {
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

export default MessageBoardApp;
