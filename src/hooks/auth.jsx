import { createContext, useContext, useState } from 'react';

import { api } from '../services/api';

const AuthContext = createContext({});

function AuthProvider({children}) {

  const [data, setData] = useState({});
  
  async function signIn({email, password}){
    //GUardando os dados do usuario em um estado data
    
    try {
    const response = await api.post("/sessions", {email, password});
    const { user, token } = response.data;

    //Passando o Token para o Header - Bearer Token
    api.defaults.headers.authorization = `Bearer ${token}`;
    setData({user, token})
      
    } catch(error) {
      if(error.reponse) {
        alert(error.reponse.data.message)
      } else {
        alert("Unable to access!")
      }
    }
  }


  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}


function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };