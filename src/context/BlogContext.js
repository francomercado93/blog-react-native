import createDataContext from "./createDataContext";

const blogPostsReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length + 1}` }];
        default:
            return state;
    }
};

const addBlogPost = () => {
    dispatch({ type: 'add_blogpost' });
}


export const { Context, Provider } = createDataContext(
    blogPostsReducer,
    { addBlogPost },
    []
); 