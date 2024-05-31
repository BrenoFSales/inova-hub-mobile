import React, { createContext, useState } from 'react';

// Cria o contexto
const LoginContext = createContext();

// Componente provedor
export const LoginsProvider = ({ children }) => {
    
  const [users, setUsers] = useState([
    { id: 1, username: 'Breno', password: '123', cpf:'111.111.111-11', email: 'breno@email.com'},
    { id: 2, username: 'Daniel', password: '123', cpf:'222.222.222-22', email: 'daniel@email.com'},

  ]);

  const addLogin = (username, password, cpf, email) => {
    const newUser = {
      id: (users.length + 1).toString(), // Gera um ID simples
      username,
      password,
      cpf,
      email,
    };
    setUsers([...users, newUser]);
  };

  return (
    <LoginContext.Provider value={{ users, addLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
