'use client'

import { authAction } from "@/app/actions/authAction";
import { logoutAction } from "@/app/actions/logoutAction";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState({name:'Test'});

  useEffect(() => {
    async function authUser() {
      const data = JSON.parse(await authAction())
      login(data);
    }
    authUser();
  }, []);

  const login = (user) => {
    setCurrentUser(user)
  }
  const logout = async() => {
    const response = JSON.parse(await logoutAction())
    setCurrentUser(null);

  }

  return (
    <AppContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};
