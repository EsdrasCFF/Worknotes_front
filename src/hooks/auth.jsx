import { createContext, useContext, useState, useEffect } from 'react';

import { api } from '../services/api';

const AuthContext = createContext({});

function AuthProvider({children}) {

  const [data, setData] = useState({});
  
  async function signIn({email, password}){    
    try {
    const response = await api.post("/sessions", {email, password});
    const { user, token } = response.data;
    
    localStorage.setItem("@worknotes:user", JSON.stringify(user));
    localStorage.setItem("@worknotes:token", token);
  

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

  function signOut() {
    localStorage.removeItem("@worknotes:user");
    localStorage.removeItem("@worknotes:token");
    
    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@worknotes:user");
    const token = localStorage.getItem("@worknotes:token");

    if(token && user) {
      setData({
        token, 
        user: JSON.parse(user)
      });
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}


function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };