import { yupResolver } from "@hookform/resolvers/yup";
import { Icon } from "@iconify/react";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { getClinicID } from "../../../utils/functions/GetClinicID";
import ButtonAction from "../../atoms/ButtonAction";
import InputAction from "../../atoms/InputAction";
import TitleText from "../../atoms/TitleText";
import { createClinicAdm } from "./request";
import { schema } from "./schema";

export interface IClinicAdm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
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
    setError("confirmPassword", {
      type: "custom",
      message: "Senhas não são iguais.",
    });
  };

  const { mutate } = useMutation(createClinicAdm, {
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
        shrink={true}
        label="Nome do Administrador"
        variant="outlined"
        fullWidth
        required
        type="text"
        name="name"
        onChange={handleChange}
      />
      <InputAction
        shrink={true}
        label="E-mail do Administrador"
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
          shrink={true}
          label="Senha do Administrador"
          variant="outlined"
          fullWidth
          required
          type="password"
          name="password"
          onChange={handleChange}
        />
        <InputAction
          shrink={true}
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
