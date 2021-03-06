import createDataContext from "./createDataContext";
import jsonServer from '../api/jsonServer';

const blogPostsReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogposts':
            return action.payload
        case 'edit_blogpost':
            return state.map(blogPost => {
                // Si el id coincide con el que recibe la funcion se modificar el objeto del array,
                // de otra forma se devuelve el objeto original
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            })
        case 'delete_blogpost':
            return state.filter(blogpost => blogpost.id !== action.payload);
        // case 'add_blogpost':
        //     return [
        //         ...state,
        //         {
        //             id: state.length + 1,
        //             title: action.payload.title,
        //             content: action.payload.content
        //         }
        //     ];
        default:
            return state;
    }
};

const getBlogPosts = dispatch => {
    return async () => {
        try {
            const response = await jsonServer.get('/blogposts');
            dispatch({ type: 'get_blogposts', payload: response.data })
        } catch (e) {
            console.log(e);
        }
    }
}

const addBlogPost = dispatch => {
    // Devuelve una funcion
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', { title, content });
        // Se lo puede eliminar , no se usa mas porque la IndexScreen hace el pedido get cada vez que se muestra la pantalla
        // dispatch({ type: 'add_blogpost', payload: response.data });
        if (callback) {
            callback();
        }
    }
}

const deleteBlogPost = dispatch => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`)
        // dispatch({ type: 'delete_blogpost', payload: id });
    }
}

const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, { title, content });
        dispatch({ type: 'edit_blogpost', payload: { id, title, content } })
        if (callback) {
            callback();
        }
    }
}


export const { Context, Provider } = createDataContext(
    blogPostsReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
    []
); 