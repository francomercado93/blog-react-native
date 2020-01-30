import createDataContext from "./createDataContext";

const blogPostsReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blogpost':
            return state.filter(blogpost => blogpost.id !== action.payload);
        case 'add_blogpost':
            return [...state, {
                id: state.length + 1,
                title: action.payload.title,
                content: action.payload.content
            }];
        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    // Devuelve una funcion
    return (title, content) => {
        dispatch({ type: 'add_blogpost', payload: { title, content } });
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