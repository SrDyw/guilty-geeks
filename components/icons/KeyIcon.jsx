import React from "react";
import Icon from "./Icon";

export default function KeyIcon({ size, className, color }) {
  return (
    <Icon className={className} size={size} color={color}>
      <>
        <path d="M7 17a5.007 5.007 0 0 0 4.898-4H14v2h2v-2h2v3h2v-3h1v-2h-9.102A5.007 5.007 0 0 0 7 7c-2.757 0-5 2.243-5 5s2.243 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z"></path>
      </>
    </Icon>
  );
}
