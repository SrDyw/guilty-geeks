"use client";
import { registerAction } from "@/app/actions/reigsterAction";
import { AppContext } from "@/context/AppContext";
import React, { useContext } from "react";

export default function RegisterForm() {
  const {currentUser} = useContext(AppContext);

  const handleRgister = async (e) => {
    e.preventDefault();

    const user = Object.fromEntries(new FormData(e.target));
    const response = await registerAction(user);
    console.log(currentUser);
  };
  return (
    <form
      onSubmit={(e) => handleRgister(e)}
      className="flex flex-col max-w-[300px] gap-2 p-4 bg-slate-400 justify-center items-center text-black"
    >
      <input type="text" name="name" placeholder="Nombre..." />
      <input type="text" name="lastname" placeholder="Apellido..." />
      <input type="password" name="password" placeholder="Contraseña..." />
      <input type="text" name="phone" placeholder="Telefono..." />
      <button type="submit">Registrar</button>
    </form>
  );
}
