import React, { useContext } from "react";
import "./index.css";
import Button from "@/components/Buttons/Button";
import { ModalContext } from "@/context/ModalContext";
import { IoLogoGameControllerB } from "react-icons/io";

export default function Hero() {
  const { onOpenRegister } = useContext(ModalContext);
  return (
    <section id="home" className="d-flex-center flex-col">
      <div className="banner-image w-full h-[100vh] absolute top-0 left-0 z-0 overflow-hidden">
        {/* <div className="absolute top-0 w-full h-full bg-[#000000d5] z-10"></div>
        <img src="assets/img/Banner.png" alt="" className="w-full object-cover"/> */}
      </div>
      <h1 className="z-10">Guilty Geeks</h1>
      <p className="description w-full z-10">
        Equipo de desarrolladores de videojuegos indies cubano
      </p>
      <div className="button-sec z-10 d-flex-center gap-5 mt-4">
        <a href="#projects" className="btn d-flex-center gap-2">
          Ver Proyectos
          <span className="scale-125">
            <IoLogoGameControllerB />
          </span>
        </a>
        <button className="btn gradient" onClick={onOpenRegister}>
          ¡Únetenos!
          <span>✨</span>
        </button>
      </div>
    </section>
  );
}
