import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    // [{ title: 'Blog Post #1' }, { title: 'Blog Post #2' }]
    // const [blogPosts, setBlogPosts] = useState([{ title: 'Blog Post #1' }, { title: 'Blog Post #2' }]);
    const [blogPosts, setBlogPosts] = useState([]);

    // Funcion auxiliar para agregar nuevos post al array
    const addBlogPost = () => {
        setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }])
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