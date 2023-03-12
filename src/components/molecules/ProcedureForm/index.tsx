import { yupResolver } from "@hookform/resolvers/yup";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonAction from "../../atoms/ButtonAction";
import InputAction from "../../atoms/InputAction";
import { createProcedure } from "./request";
import { schema } from "./schema";

export interface ITherapist {
  name: string;
  code: string;
}

export default function ProcedureForm() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<ITherapist>({ resolver: yupResolver(schema) });

  const handleChange = (event: any) => {
    setValue(event.target.name, event.target.value);
  };

  const { mutate } = useMutation(createProcedure, {
    onSuccess: (data: any) => {
      navigate(`/${pathname.split("/")[1]}/procedures`);
    },
    onError: (error) => {
      alert(error);
    },
  });

  const onSubmit = (data: ITherapist) => {
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
        label="Código do Procedimento"
        variant="outlined"
        fullWidth
        required
        type="text"
        name="code"
        onChange={handleChange}
      />
      <InputAction
        label="Nome do Procedimento"
        variant="outlined"
        fullWidth
        required
        type="text"
        name="name"
        onChange={handleChange}
      />
      <ButtonAction type="submit" fullWidth variant="contained">
        <>
          Concluir Cadastro <Icon icon="ic:round-check" width={30} />
        </>
      </ButtonAction>
    </form>
  );
}
