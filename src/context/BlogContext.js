import createDataContext from "./createDataContext";

const blogPostsReducer = (state, action) => {
    switch (action.type) {
        case 'edit_blogpost':
            return state.map(blogPost => {
                // Si el id coincide con el que recibe la funcion se modificar el objeto del array,
                // de otra forma se devuelve el objeto original
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            })
        case 'delete_blogpost':
            return state.filter(blogpost => blogpost.id !== action.payload);
        case 'add_blogpost':
            return [
                ...state,
                {
                    id: state.length + 1,
                    title: action.payload.title,
                    content: action.payload.content
                }
            ];
        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    // Devuelve una funcion
    return (title, content, callback) => {
        dispatch({ type: 'add_blogpost', payload: { title, content } });
        if (callback) {
            callback();
        }
    }
}

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id });
    }
}

const editBlogPost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({ type: 'edit_blogpost', payload: { id, title, content } })
        if (callback) {
            callback();
        }
    }
}


export const { Context, Provider } = createDataContext(
    blogPostsReducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    [{ title: 'Test Post', content: 'Test Content', id: 1 }]
); 