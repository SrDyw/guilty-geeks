import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

export const useUser = () => {
  const { currentUser, login:appLogin, logout:appLogout } = useContext(AppContext);

  const logUser = (user) => {
    appLogin(user);
  }

  const logout = () => {
    appLogout();
  }

  const isLogged = () => currentUser != null;

  return {currentUser, logUser, logout, isLogged};
};
