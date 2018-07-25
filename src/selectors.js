import { createSelector } from 'reselect';

const getCurrentPosts = (state) => {
    return state.posts;
}

export const sortedPosts = createSelector(
    [getCurrentPosts],
    (currentPosts) => {
        return currentPosts.sort((a,b) => b.id - a.id );
    }
)
