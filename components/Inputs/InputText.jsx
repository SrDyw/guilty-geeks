import React, { useEffect, useState } from "react";
import "./input.css";

const lableState = {
  blur: "label-blur",
  focus: "label-focus",
};

export default function InputText({
  name,
  value: valueProp,
  placeholder,
  onChange: onChangeEvent,
  label,
  icon,
  type,
  error,
  info,
  required,
  onClick
}) {
  const [focus, setFocus] = useState(false);
  const [floatingState, setFloatingState] = useState(lableState.blur);

  useEffect(() => {
    if (!focus && valueProp == "") {
      setFloatingState(lableState.blur);
      return;
    }
    setFloatingState(lableState.focus);
  }, [focus]);

  useEffect(() => {
    if (valueProp != "") setFloatingState(lableState.focus)
  }, [valueProp])
  

  return (
    <div className="input-field form-group">
      <input
        type={type ?? "text"}
        name=""
        id=""
        placeholder={placeholder}
        value={valueProp}
        onChange={(e) => {
          if (onChangeEvent) onChangeEvent(e);
        }}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        required={required}
        onClick={(e) => onClick && onClick(e)}
      />
      <label htmlFor={name} className={`floating-label ${floatingState}`}>
        <span>{icon && icon}</span>
        {label}
      </label>
      <p className={`form-feedback-wrong ${!error && 'hidden'} text-red-500 text-sm`}>{error}</p>
      <p className={`form-feedback-wrong ${(error || !info || !focus || valueProp != "") && 'hidden'} text-green-500 text-sm`}>{info}</p>

    </div>
  );
}
