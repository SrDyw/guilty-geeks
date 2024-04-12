"use client";

import { authAction } from "@/app/actions/auth/authAction";
import { logoutAction } from "@/app/actions/user/logoutAction";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    async function authUser() {
      const data = await authAction();
      if (data != undefined) {
        const user = JSON.parse(data);
        login(user);
      }
    }
    authUser();
  }, []);

  const login = (user) => {
    setCurrentUser(user);
  };
  const logout = async () => {
    const response = JSON.parse(await logoutAction());
    setCurrentUser(null);
  };

  return (
    <AppContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};
