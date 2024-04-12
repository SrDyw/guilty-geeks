"use client";
import LoginModal from "@/components/Modals/Login/LoginModal";
import Modal from "@/components/Modals/Modal";
import { useDisclosure } from "@/hooks/useDisclosure";
import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const {
    state: stateLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin,
  } = useDisclosure();

  return (
    <ModalContext.Provider value={{ onOpenLogin }}>
      {children}
      <LoginModal state={stateLogin} onClose={onCloseLogin} />
    </ModalContext.Provider>
  );
};
