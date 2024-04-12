import React from "react";
import Modal from "../Modal";

export default function LoginModal({state, onClose}) {
  return (
    <Modal
      state={state}
      onClose={onClose}
      title={"Iniciar Sesion"}
    >
      <p>Credentials...</p>
    </Modal>
  );
}
