import {
    ADD_POST,
    ADD_REPLY
} from './actions';


const initialState = {
    posts: []
}

const messageBoardReducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_POST:

            const newPost = {
                id: state.posts.length,
                title: action.title,
                author: action.author,
                text: action.text
            }

            return {
                posts: state.posts.concat(newPost)
            }

        case ADD_REPLY:

            const newReply = {
                title: action.title,
                author: action.author,
                text: action.text,
                postID: action.postID
            }

            const newPosts = state.posts.map((post) => {
                if (post.id === action.id) {
                    post.replies.push(newReply);
                }
            });

            return {
                posts: newPosts
            }

        default:
            return state;
    }
}


export default messageBoardReducer;
