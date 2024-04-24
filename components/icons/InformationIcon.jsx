import React from "react";
import Icon from "./Icon";

export default function InformationIcon({ className, size, color }) {
  return (
    <Icon className={className} size={size} color={color}>
      <>
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>

      </>
    </Icon>
  );
}
