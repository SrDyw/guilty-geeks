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
    if (focusState == "closed" && count > 1) onClose();
    else {
      setFocusableState("open");
    }
    setCount((prev) => prev + 1);
  }, [focusState]);

  useEffect(() => {
    if (state == "open") {
      setCount(0);
      setFocusableState("open");
    }
  }, [state]);

  return (
    <div className={`modal modal-${openState()}`}>
      <div className="panel"></div>
      <div className="modal-body" ref={modalRef}>
        <div className="modal-header">
          <div className="modal-title">{header || <h2>{title}</h2>}</div>
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
