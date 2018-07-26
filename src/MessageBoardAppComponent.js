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
import FullPost from './FullPost';


class MessageBoardAppComponent extends React.Component {

    getCurrentPost = (id) => {
        return this.props.posts.find(post => post.id === parseInt(id, 10));
    }

    render() {
        return (
            <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
                <div>
                    <NavHeader />
                    <Switch>
                        <Route exact path="/posts" render={() => <PostCollection posts={this.props.posts} />} />
                        <Route path="/posts/new" render={() => <NewPostForm addNewPost={this.props.addPost} />} />
                        <Route path="/posts/:id" render={(props) => <FullPost post={this.getCurrentPost(props.match.params.id)}
                                                                              addNewReply={this.props.addReply} />} />
                        <Redirect exact from='/*' to='/posts'/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default MessageBoardAppComponent;
