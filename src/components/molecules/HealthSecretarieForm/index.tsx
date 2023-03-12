import { Box } from "@mui/material";
import ButtonAction from "../../atoms/ButtonAction";
import InputAction from "../../atoms/InputAction";
import { Icon } from "@iconify/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useForm } from "react-hook-form";
import TitleText from "../../atoms/TitleText";
import { useMutation } from "react-query";
import { createHealthSecretary } from "./request";
import { useLocation, useNavigate } from "react-router-dom";

export interface ISecretarie {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function HealthSecretarieForm() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<ISecretarie>({ resolver: yupResolver(schema) });

  const handleChange = (event: any) => {
    setValue(event.target.name, event.target.value);
    setError("confirmPassword", {
      type: "custom",
      message: "Senhas não são iguais.",
    });
  };

  const { mutate } = useMutation(createHealthSecretary, {
    onSuccess: (data: any) => {
      navigate(`/${pathname.split("/")[1]}/health-secretaries`);
    },
    onError: (error) => {
      alert(error);
    },
  });

  const onSubmit = (data: ISecretarie) => {
    mutate(data);
  };

  return (
    <form
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          width: "50%",
        }}
      >
        <InputAction
          label="Nome do Secretário"
          variant="outlined"
          fullWidth
          required
          type="text"
          name="name"
          onChange={handleChange}
        />
        <InputAction
          label="E-mail do Secretário"
          variant="outlined"
          fullWidth
          required
          type="text"
          name="email"
          onChange={handleChange}
        />
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <InputAction
            label="Senha do Secretário"
            variant="outlined"
            fullWidth
            required
            type="password"
            name="password"
            onChange={handleChange}
          />
          <InputAction
            label="Confirmação de senha"
            variant="outlined"
            fullWidth
            required
            type="password"
            name="confirmPassword"
            onChange={handleChange}
          />
        </Box>
        {errors.confirmPassword && (
          <TitleText variant="body2" color="primary.main">
            {errors.confirmPassword.message}
          </TitleText>
        )}
        <ButtonAction type="submit" fullWidth variant="contained">
          <>
            Concluir Cadastro <Icon icon="ic:round-check" width={30} />
          </>
        </ButtonAction>
      </Box>
    </form>
  );
}
