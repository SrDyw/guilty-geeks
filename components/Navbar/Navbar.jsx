"use client";

import React, { useEffect, useState } from "react";
import "./navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import AccountNavbar from "./AccountNavbar";
export default function Navbar() {
  const path = usePathname();
  const [scroll, setScroll] = useState();
  const scrollAmount = 100;

  const isActive = (pathName) => {
    return path === pathName ? " nav-link-active" : "";
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Recuerda remover el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrolledNavbar = () =>
    scroll > scrollAmount ? " navbar-scrolled" : "";

  return (
    <nav className={" top-0 w-full d-flex-center fixed z-50" + scrolledNavbar()}>
      <Logo />
      <ul className="d-flex-center gap-4 nav-link-list">
        <Link href={"/"} className={"nav-link" + isActive("/")}>
          Inicio
        </Link>
        <Link href={"#photos"} className={"nav-link" + isActive("/photos")}>
          Fotos
        </Link>
        <Link href={"#schedule"} className={"nav-link" + isActive("/schedule")}>
          Calendario
        </Link>
      </ul>
      <AccountNavbar />
    </nav>
  );
}
