import React from "react";
import "./button.css";
import Spinner from "../icons/Spinner";

export default function Button({
  className,
  value,
  color,
  type,
  loading,
  enable = true,
}) {
  return (
    <button
      className={
        `form-button bg-[${
          color ?? "transparent"
        }] d-flex-center gap-2 opacity-[${!enable ? 0.5 : 1}] ` + className
      }
      type={type}
      disabled={!enable || loading}
    >
      {loading && <Spinner size={25} />}
      {value}
    </button>
  );
}
