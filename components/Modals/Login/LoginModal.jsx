import React, { useContext, useState } from "react";
import Modal from "../Modal";
import InputText from "@/components/Inputs/InputText";
import { password } from "pg/lib/defaults";
import UserIcon from "@/components/icons/UserIcon";
import KeyIcon from "@/components/icons/KeyIcon";
import Button from "@/components/Buttons/Button";
import { config } from "@/appconfig";
import { ModalContext } from "@/context/ModalContext";
import { loginAction } from "@/app/actions/user/loginAction";
import { useUser } from "@/hooks/useUser";

export default function LoginModal({ state, onClose }) {
  const { onOpenRegister, onCloseLogin } = useContext(ModalContext);
  const [loading, setLoading] = useState(false);
  const { logUser } = useUser();

  const regexNumber = config.validation.regexNumber;

  const [formData, setFormData] = useState({
    contact: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = JSON.parse(await loginAction(formData));
    if (!response.error) {
      logUser(response);
      onClose();
    } else {
      console.log(response.error);
    }
    setLoading(false);
  };

  const LoginHeader = () => {
    return (
      <h2 className="text-center w-full text-2xl font-bold mb-[20px]">
        Iniciar Sesion
      </h2>
    );
  };

  return (
    <Modal
      state={state}
      onClose={onClose}
      title={"Iniciar Sesion"}
      width={"400px"}
      header={<LoginHeader />}
    >
      <form
        action=""
        className="flex flex-col gap-3 max-w-[300px]"
        onSubmit={handleSubmit}
      >
        <InputText
          value={formData.contact}
          onChange={(e) =>
            setFormData({ ...formData, contact: e.target.value })
          }
          label={"Numero movil"}
          name={"contact"}
          icon={<UserIcon size={"16"} />}
          required={true}
          error={
            (formData.contact != "" && !regexNumber.test(formData.contact)) &&
            "Número inválido. Ejemplo: +53 55390832"
          }
        />
        <InputText
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          label={"Contraseña"}
          name={password}
          type={"password"}
          icon={<KeyIcon size={"20"} />}
          required={true}
        />
        <div className="form-footer flex flex-col gap-2 mt-3">
          <Button
            value={"Aceptar"}
            color={config.style.colors.primary}
            type={"submit"}
            loading={loading}
            enable={regexNumber.test(formData.contact)}
          />
          <p className="m-0 p-0 text-sm">
            ¿No tienes cuenta? Haz click{" "}
            <span
              className="text-cyan-500 underline cursor-pointer"
              onClick={() => {
                onOpenRegister();
                onCloseLogin();
              }}
            >
              aqui
            </span>
          </p>
        </div>
      </form>
    </Modal>
  );
}
