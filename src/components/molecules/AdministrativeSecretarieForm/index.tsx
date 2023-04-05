import { Box } from "@mui/material";
import ButtonAction from "../../atoms/ButtonAction";
import InputAction from "../../atoms/InputAction";
import { Icon } from "@iconify/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useForm } from "react-hook-form";
import TitleText from "../../atoms/TitleText";
import { useMutation } from "react-query";
import { createAdministrativeSecretary } from "./request";
import { useLocation, useNavigate } from "react-router-dom";
import { getClinicID } from "../../../utils/functions/GetClinicID";
import EmailMessage from "../../atoms/EmailMessage";

export interface ISecretarie {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function AdministrativeSecretarieForm() {
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
  };

  const { mutate, isLoading } = useMutation(createAdministrativeSecretary, {
    onSuccess: (data: any) => {
      navigate(`/${pathname.split("/")[1]}/administrative-secretaries`);
    },
    onError: (error) => {
      alert(error);
    },
  });

  const onSubmit = (data: ISecretarie) => {
    const dataToSend = {
      name: data.name,
      email: data.email,
      password: data.password,
      clinic_id: getClinicID(),
    };
    mutate(dataToSend);
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
        <EmailMessage />
        <ButtonAction 
          disabled={isLoading}
          isLoading={isLoading}
          type="submit" fullWidth variant="contained">
          <>
            Concluir Cadastro <Icon icon="ic:round-check" width={30} />
          </>
        </ButtonAction>
      </Box>
    </form>
  );
}
