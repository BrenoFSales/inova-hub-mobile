import React, { createContext, useState } from 'react';

// Cria o contexto
const PostsContext = createContext();

// Componente provedor
export const PostsProvider = ({ children }) => {
    
  const [posts, setPosts] = useState([
    { id: 1, idUser: 1, title: 'InovaHub',  description: 'Plataforma para salvar suas brilhantes ideias', image: 'https://lh7-us.googleusercontent.com/HMexNO2U5xVwLgqVwVOet7hL68OM9q_i6-LzLlhyKETMoMmDG7CvOnfg9koam_4vqRiEsHrpMoshF6ft2kszvnb-auhJfh5m99VAkhKcQkJMG3QnPVTWBW1nw3b8jlVIZX6jtnvRniCbR80zYgDroQ', categorias: 'TI', likes: 0, liked: false, comments: ['Grande ideia.', 'Campeão do Inova Week 2024!'], text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    { id: 2, idUser: 1, title: 'Project L', description: 'Jogo de luta 2v2 baseado no universo de runeterra', image: 'https://s2-techtudo.glbimg.com/fEnUHnvgzLLkDE-zP0ErtD5SBgc=/0x0:1920x1080/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/z/p/1rMM0zRIOMy31bNJSMew/sukurinshiyotsuto-2023-08-04-122954.png', categorias: 'Marketing', likes: 0, liked: false, comments: ['Jogo muito bom.', 'Todos os jogos a Riot são bons, menos o LOL.'], text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 3, idUser: 2, title: 'ChatGPT', description: 'Uma IA generativa maravilhosa', image: 'https://chatgpt.com.br/wp-content/uploads/2023/05/app-chatgpt.webp', categorias: 'TI', likes: 0, liked: false, comments: ['Exccelente IA generativa.', 'As IAs vão dominar o mundo.', 'Utilizo muito no trabalho e nos estudos', 'O Gemini também é excelente, forte concorrente.'], text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  ]);

  const addPost = (idUser, title, description, image, categorias, likes, liked) => {
    const newPost = {
      id: (posts.length + 1).toString(), // Gera um ID simples
      idUser,
      title,
      image,
      description,
      categorias,
      likes: 0,
      liked: false,
    };
    setPosts([...posts, newPost]);
  };

  return (
    <PostsContext.Provider value={{ posts, addPost, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContext;
