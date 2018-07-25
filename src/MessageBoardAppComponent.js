import React from 'react';
import {
    BrowserRouter,    
    Route,
    Switch,
    Redirect
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
                        <Route exact path="/posts" render={() => <PostCollection posts={this.props.posts} />} />
                        <Route path="/posts/new" render={() => <NewPostForm createNewPost={this.props.addPost} />} />
                        <Redirect exact from='/' to='/posts'/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default MessageBoardAppComponent;
