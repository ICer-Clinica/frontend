import { yupResolver } from "@hookform/resolvers/yup";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonAction from "../../atoms/ButtonAction";
import InputAction from "../../atoms/InputAction";
import Select from "../../atoms/Select";
import { ISelect } from "../TherapistForm";
import { createProcedure } from "./request";
import { schema } from "./schema";
import { PatternFormat } from "react-number-format";
import { removeMasks } from "../../../utils/functions/removeMasks";
import { getClinicID } from "../../../utils/functions/GetClinicID";

export interface ITherapist {
  name: string;
  code: string;
  area: string;
}

const areas = [
  { label: "Psicologia", value: "PSYCHOLOGY" },
  { label: "Fisioterapia", value: "PHYSIOTHERAPY" },
  { label: "Fonoaudiologia", value: "PHONOAUDIOLOGY" },
  { label: "Terapia Ocupacional", value: "OCCUPATIONAL_THERAPY" },
] as ISelect[];

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

  const { mutate, isLoading } = useMutation(createProcedure, {
    onSuccess: (data: any) => {
      navigate(`/${pathname.split("/")[1]}/procedures`);
    },
    onError: (error) => {
      alert(error);
    },
  });

  const onSubmit = (data: ITherapist) => {
    const { area, code, name } = data;
    const dataToSend = {
      code: removeMasks(code),
      name,
      area,
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
      <PatternFormat
        format="##.##.##.###-#"
        customInput={InputAction}
        label="Código do Procedimento"
        variant="outlined"
        fullWidth
        required
        type="text"
        name="code"
        onChange={handleChange}
        mask="_"
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
      <Select
        label="Área do procedimento"
        values={areas}
        name="area"
        onChange={handleChange}
      />
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
