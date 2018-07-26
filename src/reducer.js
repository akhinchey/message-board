import {
    ADD_POST,
    ADD_REPLY
} from './actions';

import starterPosts from './data';
import generateCurrentDate from './utils';


const initialState = {
    posts: starterPosts
}

const messageBoardReducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_POST:

            const newPost = {
                id: state.posts.length + 1,
                title: action.title,
                author: action.author,
                date: generateCurrentDate(),
                text: action.text,
                replies: []
            }

            return {
                posts: state.posts.concat(newPost)
            }

        case ADD_REPLY:

            const newReply = {
                title: action.title,
                author: action.author,
                date: generateCurrentDate(),
                text: action.text,
                postID: action.postID
            }

            const newPosts = state.posts.map((post) => {
                if (post.id === action.id) {
                    post.replies.push(newReply);
                }
                return post
            });

            return {
                posts: newPosts
            }

        default:
            return state;
    }
}


export default messageBoardReducer;
