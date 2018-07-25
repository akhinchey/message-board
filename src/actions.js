export const ADD_POST = 'ADD_POST';
export const ADD_REPLY = 'ADD_REPLY';


export const addPostAction = (title, author, text) => {
    return {
        type: ADD_POST,
        title: title,
        author: author,
        text: text
    }
}

export const addReplyAction = (author, text, postID) => {
    return {
        type: ADD_REPLY,
        author: author,
        text: text,
        postID: postID
    }
}