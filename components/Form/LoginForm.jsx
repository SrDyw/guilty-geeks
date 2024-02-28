"use client";
import { loginAction } from "@/app/actions/loginAction";
import { AppContext } from "@/context/AppContext";
import { useUser } from "@/hooks/useUser";
import React, { useContext } from "react";

export default function LoginForm() {
  const { currentUser } = useContext(AppContext);
  const { logUser, logout } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = Object.fromEntries(new FormData(e.target));
    const response = JSON.parse(await loginAction(user));
    if (!response.error) {
      logUser(response);
    } else {
      console.log(response.error);
    }
  };
  return (
    <>
      <form
        onSubmit={(e) => handleLogin(e)}
        className="flex flex-col max-w-[300px] gap-2 p-4 bg-slate-400 justify-center items-center text-black"
      >
        <input type="text" name="name" placeholder="Nombre..." />
        <input type="password" name="password" placeholder="Contraseña..." />
        <button type="submit">Acceder</button>
      </form>
      <button onClick={logout}>Logout</button>
    </>
  );
}
