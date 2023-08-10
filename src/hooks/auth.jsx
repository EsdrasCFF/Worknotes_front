import { createContext, useContext, useState, useEffect } from 'react';

import { api } from '../services/api';

const AuthContext = createContext({});

function AuthProvider({children}) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try{
      const response = await api.post("/sessions", {email, password});
      const { user, token } = response.data;

      api.defaults.headers.common["authorization"] = `Bearer ${token}`;

      localStorage.setItem("@worknotes:user", JSON.stringify(user));
      localStorage.setItem("@worknotes:token", token);

      setData({user, token});
      
    } catch(error) {
      if(error.response) {
        alert(error.response.data.message);
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

  async function updateProfile({ user }) {
    try{
      await api.put("/users", user);
      
      user = {
        name: user.name,
        email: user.email
      }

      localStorage.setItem("@worknotes:user", JSON.stringify(user));

      setData({
        user,
        token: data.token
      });

      alert("Profile updated!")

    } catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Can't possible update profile!")
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@worknotes:user");
    const token = localStorage.getItem("@worknotes:token");

    if(token && user) {
      setData({
        user: JSON.parse(user),
        token
      })
    }
  },[])
    
  return (
    <AuthContext.Provider value={{ signIn, signOut, updateProfile, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }