import React from 'react';
import {
    BrowserRouter,    
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import PostCollection from './PostCollection';
import NewPostForm from './NewPostForm';
import FullPost from './FullPost';
import ScrollToTop from './ScrollToTop';


class MessageBoardAppComponent extends React.Component {

    getCurrentPost = (id) => {
        return this.props.posts.find(post => post.id === parseInt(id, 10));
    }

    render() {
        return (
            <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
                <ScrollToTop>
                    <Switch>
                        <Route exact path="/posts" render={() => <PostCollection posts={this.props.posts} />} />
                        <Route path="/posts/new" render={() => <NewPostForm postCount={this.props.posts.length}
                                                                            addNewPost={this.props.addPost} />} />
                        <Route path="/posts/:id" render={(props) => <FullPost post={this.getCurrentPost(props.match.params.id)}
                                                                              addNewReply={this.props.addReply} />} />
                        <Redirect exact from='/*' to='/posts'/>
                    </Switch>
                </ScrollToTop>
            </BrowserRouter>
        );
    }
}

export default MessageBoardAppComponent;
