import { useEffect, useState } from "react";

export const useFocusable = ({ reference }) => {
  const [state, setState] = useState("closed");

  const getDepth = (element) => {
    const depth = window.getComputedStyle(element).getPropertyValue("z-index");
    return depth != "auto" ? Number(depth) : 0
  };

  useEffect(() => {
    const handleClick = (e) => {
      // document.body.style.zIndex
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
