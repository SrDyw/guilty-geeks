import { useEffect, useState } from "react";

export const useFocusable = ({ reference }) => {
    const [state, setState] = useState("closed");
  
    useEffect(() => {
      const handleClick = (e) => {
        if (!reference.current.contains(e.target)) {
          setState("closed");
        }
      };
      window.addEventListener("click", handleClick);
  
      return () => {
        window.removeEventListener("click", handleClick);
      };
    }, []);
  
    const exchangeState = () => {
      setState((prev) => (prev == "closed" ? "open" : "closed"));
    };
  
    return { state, exchangeState, setState };
  };