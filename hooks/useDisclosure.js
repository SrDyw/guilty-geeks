import { useState } from "react";

export const useDisclosure = () => {
  const [state, setState] = useState('closed');

  const onOpen = () => {
    setState('open')
    console.log("asdasd")
  }
  const onClose = () => {
    setState('closed')
  }

  return {state, onClose, onOpen}
};
