import createDataContext from "./createDataContext";

const blogPostsReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blogpost':
            return state.filter(blogpost => blogpost.id !== action.payload);
        case 'add_blogpost':
            return [...state, { id: state.length + 1, title: `Blog Post #${state.length + 1}` }];
        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    // Devuelve una funcion
    return () => {
        dispatch({ type: 'add_blogpost' });
    }
}

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id });
    }
}


export const { Context, Provider } = createDataContext(
    blogPostsReducer,
    { addBlogPost, deleteBlogPost },
    []
); 