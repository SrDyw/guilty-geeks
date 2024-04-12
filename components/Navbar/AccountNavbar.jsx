import React, { useContext, useEffect, useRef, useState } from "react";
import UserIcon from "../icons/UserIcon";
import { useFocusable } from "@/hooks/useFocusable";
import LoginIcon from "../icons/LoginIcon";
import AccountUserIcon from "../icons/AccountUserIcon";
import { useUser } from "@/hooks/useUser";
import LogoutIcon from "../icons/LogoutIcon";
import { config } from "@/appconfig";
import { ModalContext } from "@/context/ModalContext";

const account_state = {
  closed: "account-closed",
  open: "account-open",
};

export default function AccountNavbar() {
  const accountDiv = useRef(null);
  const { state, exchangeState } = useFocusable({ reference: accountDiv });
  const { currentUser, isLogged, logout } = useUser();

  const { onOpenLogin } = useContext(ModalContext);

  const AccountOption = ({ label, icon, onClick, color }) => {
    const OptionIcon = icon;
    return (
      <li
        onClick={onClick}
        className={`text-[${color}] ${
          color == config.style.colors.danger && "danger-option"
        }`}
      >
        {label}
        <span>{OptionIcon && <OptionIcon color={color} />}</span>
      </li>
    );
  };

  return (
    <div className="absolute right-[20px] h-full d-flex-center">
      <div
        className={
          "navbar-account relative d-flex-center gap-2 cursor-pointer account-element " +
          account_state[state]
        }
        ref={accountDiv}
        onClick={exchangeState}
      >
        {currentUser && (
          <p className="d-flex-center flex-col ">
            {currentUser?.name}
            <span className="text-[10px] opacity-[0.5]">
              {currentUser?.rol}
            </span>
          </p>
        )}
        <div className="icon">
          <AccountUserIcon size={40} className={"account-element"} />
        </div>
        <div className={`navbar-account-body navbar-account-body-${state}`}>
          <ul>
            {!isLogged() ? (
              <>
                <AccountOption label={"Registrate"} icon={UserIcon} />
                <AccountOption label={"Inicia Sesion"} icon={LoginIcon} onClick={onOpenLogin}/>
              </>
            ) : (
              <>
                <AccountOption label={"Mi cuenta"} icon={UserIcon} />
                <AccountOption
                  label={"Salir"}
                  icon={LogoutIcon}
                  onClick={logout}
                  color={config.style.colors.danger}
                />
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
