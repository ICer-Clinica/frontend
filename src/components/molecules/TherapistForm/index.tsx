import { yupResolver } from "@hookform/resolvers/yup";
import { Icon } from "@iconify/react";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonAction from "../../atoms/ButtonAction";
import InputAction from "../../atoms/InputAction";
import Select from "../../atoms/Select";
import TitleText from "../../atoms/TitleText";
import { createTherapist } from "./request";
import { schema } from "./schema";

export interface ITherapist {
  name: string;
  email: string;
  office: string;
  password: string;
  confirmPassword: string;
}

export interface ISelect {
  label: string;
  value: string;
}

const offices = [
  { label: "Psicologo", value: "PSYCHOLOGY" },
  { label: "Fisioterapeuta", value: "PHYSIOTHERAPY" },
  { label: "Fonoaudiólogo", value: "PHONOAUDIOLOGY" },
  { label: "Terapeuta Ocupacional", value: "OCCUPATIONAL_THERAPY" },
] as ISelect[];

export default function TherapistForm() {
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
    console.log(event.target.name, event.target.value);

    setValue(event.target.name, event.target.value);
    setError("confirmPassword", {
      type: "custom",
      message: "Senhas não são iguais.",
    });
  };

  const { mutate } = useMutation(createTherapist, {
    onSuccess: (data: any) => {
      navigate(`/${pathname.split("/")[1]}/therapists`);
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
        label="Nome do Terapeuta"
        variant="outlined"
        fullWidth
        required
        type="text"
        name="name"
        onChange={handleChange}
      />
      <InputAction
        label="E-mail do Terapeuta"
        variant="outlined"
        fullWidth
        required
        type="text"
        name="email"
        onChange={handleChange}
      />
      <Select
        label="Profissão do Terapeuta"
        values={offices}
        name="office"
        onChange={handleChange}
      />
      <Box
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        <InputAction
          label="Senha do Terapeuta"
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
    </form>
  );
}
