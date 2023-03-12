import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonAction from "../../components/atoms/ButtonAction";
import InputAction from "../../components/atoms/InputAction";
import PageTitle from "../../components/atoms/PageTitle";
import { ApiService } from "../../config/api";
import { allUsersEndpoints } from "../../utils/endpoints/allUsers";
import { getUserID } from "../../utils/functions/getUserId";
import { schema } from "./schema";

export interface IClinicAdm {
  password: string;
  confirmPassword: string;
}

export default function UpdatePassword() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IClinicAdm>({
    resolver: yupResolver(schema),
  });

  const handleChange = (event: any) => {
    setValue(event.target.name, event.target.value);
  };

  const updatePassword = async (data: { newPassword: string }) => {
    const api = new ApiService();

    return await api.RequestData(
      "PUT",
      allUsersEndpoints.updatePassword(getUserID()),
      data
    );
  };

  const { mutate, isLoading } = useMutation(updatePassword, {
    onSuccess: (data: any) => {
      navigate(`/${pathname.split("/")[1]}/dashboard`);
    },
    onError: (error) => {
      alert(error);
    },
  });

  const onSubmit = (data: IClinicAdm) => {
    mutate({ newPassword: data.password });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1.7rem",
        maxHeight: "90vh",
        height: "90vh",
      }}
    >
      <PageTitle title="Redefinir senha" />
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          borderRadius: "20px",
          padding: "1.8rem",
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <InputAction
              label="Nova senha"
              variant="outlined"
              fullWidth
              required
              type="password"
              onChange={handleChange}
              name="password"
            />
            <InputAction
              label="Nova senha"
              variant="outlined"
              fullWidth
              required
              type="password"
              onChange={handleChange}
              name="confirmPassword"
              error={Boolean(errors?.confirmPassword?.message)}
              helperText={errors?.confirmPassword?.message}
            />
          </Box>
          <ButtonAction type="submit" variant="contained" isLoading={isLoading}>
            Confirmar
          </ButtonAction>
        </form>
      </Paper>
    </Box>
  );
}
