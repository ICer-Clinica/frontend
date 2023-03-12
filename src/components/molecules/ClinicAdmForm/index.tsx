import { yupResolver } from "@hookform/resolvers/yup";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { getClinicID } from "../../../utils/functions/GetClinicID";
import ButtonAction from "../../atoms/ButtonAction";
import EmailMessage from "../../atoms/EmailMessage";
import InputAction from "../../atoms/InputAction";
import { createClinicAdm } from "./request";
import { schema } from "./schema";

export interface IClinicAdm {
  name: string;
  email: string;
  clinic_id?: string;
}

export default function ClinicAdmForm() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<IClinicAdm>({ resolver: yupResolver(schema) });

  const handleChange = (event: any) => {
    setValue(event.target.name, event.target.value);
    setValue("clinic_id", getClinicID());
  };

  const { mutate, isLoading } = useMutation(createClinicAdm, {
    onSuccess: (data: any) => {
      navigate(`/${pathname.split("/")[1]}/clinic-adms`);
    },
    onError: (error) => {
      alert(error);
    },
  });

  const onSubmit = (data: IClinicAdm) => {
    mutate(data);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputAction
        label="Nome do Administrador"
        variant="outlined"
        fullWidth
        required
        type="text"
        name="name"
        onChange={handleChange}
      />
      <InputAction
        label="E-mail do Administrador"
        variant="outlined"
        fullWidth
        required
        type="text"
        name="email"
        onChange={handleChange}
      />
      <EmailMessage />
      <ButtonAction
        type="submit"
        fullWidth
        variant="contained"
        isLoading={isLoading}
      >
        <>
          Concluir Cadastro <Icon icon="ic:round-check" width={30} />
        </>
      </ButtonAction>
    </form>
  );
}
