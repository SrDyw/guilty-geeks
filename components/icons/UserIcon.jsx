import React from "react";
import Icon from "./Icon";

export default function UserIcon({ size, className }) {
  return (
    <Icon size={size} className={className}>
      <>
        <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
      </>
    </Icon>
  );
}
