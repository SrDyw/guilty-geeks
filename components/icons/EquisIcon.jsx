import React from "react";
import Icon from "./Icon";

export default function EquisIcon({ className, size, color}) {
  return (
    <Icon className={className} size={size} color={color}>
      <>
        <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
      </>
    </Icon>
  );
}
