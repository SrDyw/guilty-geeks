import React from "react";
import Icon from "./Icon";

export default function LoginIcon({ size, className }) {
  return (
    <Icon size={size} className={className}>
      <>
        <path d="m13 16 5-4-5-4v3H4v2h9z"></path>
        <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
      </>
    </Icon>
  );
}
