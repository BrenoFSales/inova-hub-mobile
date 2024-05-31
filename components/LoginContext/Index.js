import React, { createContext, useState } from 'react';

// Cria o contexto
const LoginContext = createContext();

// Componente provedor
export const LoginsProvider = ({ children }) => {
    
  const [logins, setLogins] = useState([
    { id: 1, user: 'Breno', senha: '123' },
    { id: 2, user: 'Daniel', senha: '123' },

  ]);

  return (
    <LoginContext.Provider value={{ logins, setLogins }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
