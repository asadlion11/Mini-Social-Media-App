const postReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_NEW_POST': {
            const newPost = action.payload.post;
            return {posts: [newPost, ...state.posts]}
        }
        case 'DELETE_POST' : {
            let deletingPostId = action.payload.postId;
            const newPosts = state.posts.filter(post => post.id !==deletingPostId);
            return {posts: newPosts};
        }
        default:
            return state;
    }
};
export default postReducer;