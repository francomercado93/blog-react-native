import React, { useReducer } from 'react';

const BlogContext = React.createContext();

const blogPostsReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length + 1}` }];
        default:
            return state;
    }
};

export const BlogProvider = ({ children }) => {
    const [blogPosts, dispatch] = useReducer(blogPostsReducer, []);

    // Funcion auxiliar para agregar nuevos post al array
    const addBlogPost = () => {
        dispatch({ type: 'add_blogpost' });
    }
    return (
        // Pasamos la variable y la funcion setter de blogPosts
        // <BlogContext.Provider value={{data: blogPosts, addBlogPost: addBlogPost}}>
        <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext;