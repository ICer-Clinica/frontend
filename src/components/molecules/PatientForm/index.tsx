import { yupResolver } from "@hookform/resolvers/yup";
import { Icon } from "@iconify/react";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonAction from "../../atoms/ButtonAction";
import InputAction from "../../atoms/InputAction";
import { createPatient } from "./request";
import { schema } from "./schema";

interface IPatient {
  name: string;
  sus_card: string;
  phone: string;
  cpf: string;
  birth_date: string;
}

export default function PatientForm() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<IPatient>({ resolver: yupResolver(schema) });

  const handleChange = (event: any) => {
    setValue(event.target.name, event.target.value);
  };

  const { mutate } = useMutation(createPatient, {
    onSuccess(data) {
      navigate(`/${pathname.split("/")[1]}/patients`);
    },
    onError(err) {
      alert(err);
    },
  });

  const onSubmit = (data: IPatient) => {
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
        label="Nome do Paciente"
        variant="outlined"
        fullWidth
        required
        type="text"
        name="name"
        onChange={handleChange}
      />
      <InputAction
        label="Cartão SUS do Paciente"
        variant="outlined"
        fullWidth
        required
        type="text"
        name="sus_card"
        onChange={handleChange}
      />
      <InputAction
        label="CPF do Paciente"
        variant="outlined"
        fullWidth
        required
        type="text"
        name="cpf"
        onChange={handleChange}
      />
      <Box
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        <InputAction
          label="Data de nascimento do Paciente"
          variant="outlined"
          fullWidth
          required
          type="text"
          name="birth_date"
          onChange={handleChange}
        />
        <InputAction
          label="Nº de telefone do Paciente"
          variant="outlined"
          fullWidth
          required
          type="text"
          name="phone"
          onChange={handleChange}
        />
      </Box>
      <ButtonAction type="submit" fullWidth variant="contained">
        <>
          Concluir Cadastro <Icon icon="ic:round-check" width={30} />
        </>
      </ButtonAction>
    </form>
  );
}
