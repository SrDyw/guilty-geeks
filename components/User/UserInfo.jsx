"use client";

import { useUser } from "@/hooks/useUser";
import React, { useContext } from "react";

export default function UserInfo() {
  const { currentUser } = useUser();
  return (
    <div>
      <h1>Usuario: {currentUser?.name}</h1>
    </div>
  );
}
