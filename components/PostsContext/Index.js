import React, { createContext, useState } from 'react';

// Cria o contexto
const PostsContext = createContext();

// Componente provedor
export const PostsProvider = ({ children }) => {
    
  const [posts, setPosts] = useState([
    { id: 1, title: 'InovaHub',  description: 'Brilhante ideia para postagens', image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg', categorias: 'TI'},
    { id: 2, title: 'Lol2', description: 'Só assim pra resolver', image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg', categorias: 'Marketing'},
    { id: 3, title: 'ChatGPT', description: 'Uma IA generativa maravilhosa', image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg', categorias: 'TI'},
  ]);

  const addPost = (title, description, image, categorias) => {
    const newPost = {
      id: (posts.length + 1).toString(), // Gera um ID simples
      title,
      image,
      description,
      categorias,
    };
    setPosts([...posts, newPost]);
  };

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContext;
