import { yupResolver } from "@hookform/resolvers/yup";
import { Icon } from "@iconify/react";
import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonAction from "../../atoms/ButtonAction";
import InputAction from "../../atoms/InputAction";
import { createClinic, updateClinic } from "./request";
import { schema } from "./schema";

export interface IClinic {
  name: string;
  street: string;
  number: string;
  district: string;
  nameAdm: string;
  email: string;
  city: string;
  state: string;
  zip: string;
}

interface IClinicForm {
  type: "CREATE" | "UPDATE";
}

export default function ClinicForm({ type }: IClinicForm) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { mutate, isLoading } = useMutation(createClinic, {
    onSuccess: (data: any) => {
      navigate(`/${pathname.split("/")[1]}/clinics`);
    },
    onError: (error) => {
      alert(error);
    },
  });
  const { mutate: updateClinicMutate } = useMutation(updateClinic, {
    onSuccess: (data: any) => {
      navigate(`/${pathname.split("/")[1]}/clinics`);
    },
    onError: (error) => {
      alert(error);
    },
  });

  const renderStep1 = () => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        width: "100%",
      }}
    >
      <InputAction
        label="Nome da clínica"
        variant="outlined"
        fullWidth
        required
        type="text"
        name="name"
        onChange={handleChange}
      />
      <InputAction
        label="Rua da clínica"
        variant="outlined"
        fullWidth
        required
        type="text"
        name="street"
        onChange={handleChange}
      />
      <Box
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        <InputAction
          label="Número da clínica"
          variant="outlined"
          fullWidth
          required
          type="text"
          name="number"
          onChange={handleChange}
        />
        <InputAction
          label="Bairro da clínica"
          variant="outlined"
          fullWidth
          required
          type="text"
          name="district"
          onChange={handleChange}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        <InputAction
          label="Cidade"
          variant="outlined"
          fullWidth
          required
          type="text"
          name="city"
          onChange={handleChange}
        />
        <InputAction
          label="Estado"
          variant="outlined"
          fullWidth
          required
          type="text"
          name="state"
          onChange={handleChange}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        <InputAction
          label="CEP"
          variant="outlined"
          fullWidth
          required
          type="text"
          name="zip"
          onChange={handleChange}
        />
      </Box>
    </Box>
  );

  const renderStep2 = () => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        width: "100%",
      }}
    >
      <InputAction
        label="Nome do administrador"
        variant="outlined"
        fullWidth
        required
        type="text"
        name="nameAdm"
        onChange={handleChange}
      />
      <InputAction
        label="E-mail do administrador"
        variant="outlined"
        fullWidth
        required
        type="text"
        name="email"
        onChange={handleChange}
      />
    </Box>
  );

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IClinic>({ resolver: yupResolver(schema) });

  const handleChange = (event: any) => {
    setValue(event.target.name, event.target.value);
  };

  const onSubmit = async (data: IClinic) => {
    if (type === "CREATE") {
      mutate(data);
    }
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {renderStep1()}
        <Divider orientation="vertical" flexItem />
        {renderStep2()}
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
