import React from 'react';
import {
    BrowserRouter,    
    Route,
    Switch
} from 'react-router-dom';

import NavHeader from './NavHeader';
import PostCollection from './PostCollection';
import NewPostForm from './NewPostForm';


class MessageBoardAppComponent extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavHeader />
                    <Switch>
                        <Route exact path="/" render={() => <PostCollection posts={this.props.posts} />} />
                        <NewPostForm createNewPost={this.props.addPost} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default MessageBoardAppComponent;
