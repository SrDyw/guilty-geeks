import React from "react";

export default function Icon({ size, className, children, color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? "24"}
      height={size ?? "24"}
      viewBox={`0 0 24 24`}
      fill={color ?? "#fff"}
      className={className}
    >
      {children}
    </svg>
  );
}
