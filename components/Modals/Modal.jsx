import React, { useEffect, useRef, useState } from "react";
import "./modal.css";
import EquisIcon from "../icons/EquisIcon";
import { useFocusable } from "@/hooks/useFocusable";

export default function Modal({
  state,
  onClose,
  children,
  header,
  footer,
  title,
  width,
}) {
  const modalRef = useRef(null);
  const {
    exchangeState,
    state: focusState,
    setState: setFocusableState,
  } = useFocusable({
    reference: modalRef,
  });

  const [count, setCount] = useState(0);

  const openState = () => (state == "open" ? "open" : "closed");

  useEffect(() => {
    if (state == "open") {
      if (focusState == "closed" && count == 1) onClose();
      else {
        setFocusableState("open");
      }
    }
  }, [focusState]);

  useEffect(() => {
    let timeout = null;
    if (state == "open") {
      setCount(0);
      setFocusableState("open");

      timeout = setTimeout(() => {
        setCount(1);
      }, 100);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [state]);
  const widthPx = width ? width + "px" : null;
  
  return (
    <div className={`modal modal-${openState()}`}>
      <div className="panel"></div>
      <div className={`modal-body`} ref={modalRef} style={{minWidth: width ?? "200px"}}>
        <div className="modal-header">
          <div className="modal-title relative w-full">
            {header || <h2 className="text-2xl font-bold">{title}</h2>}
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <EquisIcon />
          </button>
        </div>
        {children}
        <div className="modal-footer mt-[20px]">{footer}</div>
      </div>
    </div>
  );
}
