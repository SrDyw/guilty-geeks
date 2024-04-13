"use client";
import LoginModal from "@/components/Modals/Login/LoginModal";
import Modal from "@/components/Modals/Modal";
import RegisterModal from "@/components/Modals/Register/RegisterModal";
import { useDisclosure } from "@/hooks/useDisclosure";
import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const {
    state: stateLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin,
    render: renderLogin
  } = useDisclosure();

  const {
    state: stateRegister,
    onOpen: onOpenRegister,
    onClose: onCloseRegister,
    render: renderRegister
  } = useDisclosure();

  return (
    <ModalContext.Provider value={{ onOpenLogin, onOpenRegister, onCloseLogin, onCloseRegister }}>
      {children}
      {renderLogin && <LoginModal state={stateLogin} onClose={onCloseLogin} />}
      {renderRegister && <RegisterModal state={stateRegister} onClose={onCloseRegister} />}
    </ModalContext.Provider>
  );
};
