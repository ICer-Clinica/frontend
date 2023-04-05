import { yupResolver } from "@hookform/resolvers/yup";
import { Icon } from "@iconify/react";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonAction from "../../atoms/ButtonAction";
import InputAction from "../../atoms/InputAction";
import TitleText from "../../atoms/TitleText";
import { createCoordinators } from "./request";
import { schema } from "./schema";
import EmailMessage from "../../atoms/EmailMessage";

export interface ICoordinator {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function CoordinatorForm() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<ICoordinator>({ resolver: yupResolver(schema) });

  const handleChange = (event: any) => {
    setValue(event.target.name, event.target.value);
  };

  const { mutate, isLoading } = useMutation(createCoordinators, {
    onSuccess: (data: any) => {
      navigate(`/${pathname.split("/")[1]}/coordinators`);
    },
    onError: (error) => {
      alert(error);
    },
  });

  const onSubmit = (data: ICoordinator) => {
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
        label="Nome do Coordenador"
        variant="outlined"
        fullWidth
        required
        type="text"
        name="name"
        onChange={handleChange}
      />
      <InputAction
        label="E-mail do Coordenador"
        variant="outlined"
        fullWidth
        required
        type="text"
        name="email"
        onChange={handleChange}
      />
      <EmailMessage />
      <ButtonAction 
        isLoading={isLoading}
        disabled={isLoading} 
        type="submit" 
        fullWidth 
        variant="contained">
        <>
          Concluir Cadastro <Icon icon="ic:round-check" width={30} />
        </>
      </ButtonAction>
    </form>
  );
}
