import { useEffect, useState } from "react";

export const useDisclosure = () => {
  const [state, setState] = useState("closed");
  const [render, setRender] = useState(false);

  const onOpen = () => {
    setRender(true);
    setTimeout(() => {
      setState("open");
    }, [100]);
  };
  const onClose = () => {
    setState("closed");
    setTimeout(() => {
      setRender(false);
    }, [1000]);
  };

  return { state, onClose, onOpen, render };
};
