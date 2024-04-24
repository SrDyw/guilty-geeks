import React, { useContext, useState } from "react";
import Modal from "../Modal";
import InputText from "@/components/Inputs/InputText";
import { password } from "pg/lib/defaults";
import UserIcon from "@/components/icons/UserIcon";
import KeyIcon from "@/components/icons/KeyIcon";
import Button from "@/components/Buttons/Button";
import { config } from "@/appconfig";
import { ModalContext } from "@/context/ModalContext";
import ContactIcon from "@/components/icons/ContactIcon";
import { registerAction } from "@/app/actions/user/reigsterAction";
import { useNotifications } from "@/hooks/useNotifications";

export default function RegisterModal({ state, onClose }) {
  const { onCloseRegister, onOpenLogin } = useContext(ModalContext);
  const { notificate } = useNotifications();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    password: "",
    contact: "",
    passwordRepeat: "",
  });

  const regexNumber = config.validation.regexNumber;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name: formData.name,
      lastname: formData.lastname,
      password: formData.password,
      contact: formData.contact,
    };
    setLoading(true);
    const response = JSON.parse(await registerAction(user));
    if (response.error) {
      notificate({
        content: response.error,
        type: "danger"
      })
    } else {
      onClose();
    }
    console.log(response)
    setLoading(false);
  };

  const LoginHeader = () => {
    return (
      <h2 className="text-center w-full text-2xl font-bold mb-[20px]">
        Registrarse
      </h2>
    );
  };

  return (
    <Modal
      state={state}
      onClose={onClose}
      width={"400px"}
      header={<LoginHeader />}
    >
      <form
        action=""
        className="flex flex-col gap-3 max-w-[300px]"
        onSubmit={handleSubmit}
      >
        <InputText
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          label={"Nombre"}
          name={"name"}
          icon={<UserIcon size={"16"} />}
          required={true}
        />
        <InputText
          value={formData.lastname}
          onChange={(e) =>
            setFormData({ ...formData, lastname: e.target.value })
          }
          label={"Apellido"}
          name={"lastname"}
          icon={<UserIcon size={"16"} />}
        />
        <InputText
          value={formData.contact}
          onChange={(e) =>
            setFormData({ ...formData, contact: e.target.value })
          }
          label={"Contacto"}
          name={"contact"}
          icon={<ContactIcon size={"16"} />}
          required={true}
          info={"Ejemplo +53 55390832"}
          error={
            formData.contact != "" &&
            !regexNumber.test(formData.contact) &&
            "Número inválido. Ejemplo: +53 55390832"
          }
        />
        <InputText
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          label={"Contraseña"}
          name={"password"}
          type={"password"}
          icon={<KeyIcon size={"20"} />}
          required={true}
        />
        <InputText
          value={formData.passwordRepeat}
          onChange={(e) =>
            setFormData({ ...formData, passwordRepeat: e.target.value })
          }
          label={"Validacion contraseña"}
          name={"passwordRepeat"}
          type={"password"}
          icon={<KeyIcon size={"20"} />}
          required={true}
          info={"Por favor escribe nuevamente la contraseña"}
          error={
            formData.passwordRepeat != "" &&
            formData.password != formData.passwordRepeat
              ? "La contraseña no coincide, favor de verificar"
              : null
          }
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
            ¿Tienes cuenta? Haz click{" "}
            <span
              className="text-cyan-500 underline cursor-pointer"
              onClick={() => {
                onCloseRegister();
                onOpenLogin();
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
