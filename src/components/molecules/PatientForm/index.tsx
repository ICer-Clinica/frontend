import { yupResolver } from "@hookform/resolvers/yup";
import { Icon } from "@iconify/react";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { convertDate } from "../../../utils/functions/convertDate";
import { getClinicID } from "../../../utils/functions/GetClinicID";
import { removeMasks } from "../../../utils/functions/removeMasks";
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

  const { mutate, isLoading } = useMutation(createPatient, {
    onSuccess(data) {
      navigate(`/${pathname.split("/")[1]}/patients`);
    },
    onError(err) {
      alert(err);
    },
  });

  const onSubmit = (data: IPatient) => {
    const { sus_card, birth_date, cpf, name, phone } = data;
    const dataToSend = {
      name,
      sus_card: removeMasks(sus_card),
      phone: removeMasks(phone),
      cpf: removeMasks(cpf),
      birth_date: new Date(convertDate(birth_date))?.toISOString(),
      clinic_id: getClinicID(),
    };

    mutate(dataToSend);
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
        error={Boolean(errors?.name?.message)}
        helperText={errors?.name?.message}
      />
      <PatternFormat
        format="### #### #### ####"
        allowEmptyFormatting
        mask="_"
        customInput={InputAction}
        label="Cartão SUS do Paciente"
        variant="outlined"
        fullWidth
        required
        type="text"
        name="sus_card"
        onChange={handleChange}
        error={Boolean(errors?.sus_card?.message)}
        helperText={errors?.sus_card?.message}
      />
      <PatternFormat
        format="###.###.###-##"
        allowEmptyFormatting
        mask="_"
        customInput={InputAction}
        label="CPF do Paciente"
        variant="outlined"
        fullWidth
        required
        type="text"
        name="cpf"
        onChange={handleChange}
        error={Boolean(errors?.cpf?.message)}
        helperText={errors?.cpf?.message}
      />
      <Box
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        <PatternFormat
          format="##/##/####"
          allowEmptyFormatting
          mask="_"
          customInput={InputAction}
          label="Data de nascimento do Paciente"
          variant="outlined"
          fullWidth
          required
          type="text"
          name="birth_date"
          onChange={handleChange}
          error={Boolean(errors?.birth_date?.message)}
          helperText={errors?.birth_date?.message}
        />
        <PatternFormat
          format="(##) #####-####"
          allowEmptyFormatting
          mask="_"
          customInput={InputAction}
          label="Nº de telefone do Paciente"
          variant="outlined"
          fullWidth
          required
          type="text"
          name="phone"
          onChange={handleChange}
          error={Boolean(errors?.phone?.message)}
          helperText={errors?.phone?.message}
        />
      </Box>
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
