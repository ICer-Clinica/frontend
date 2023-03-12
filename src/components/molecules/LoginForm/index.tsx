import { useMutation } from "react-query";
import ButtonAction from "../../atoms/ButtonAction";
import InputAction from "../../atoms/InputAction";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Loading from "../../atoms/Loading";
import { reqSuccess, requestAuth } from "./request";
import { schema } from "./schema";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../atoms/ErrorMessage";

interface ISignin {
  email: string;
  password: string;
}

export default function LoginForm() {
  const navigate = useNavigate();
  const { setValue, handleSubmit } = useForm<ISignin>({
    resolver: yupResolver(schema),
  });

  const handleChange = (event: any) => {
    setValue(event.target.name, event.target.value);
  };

  const { isLoading, mutate, isSuccess, data, isError } = useMutation(
    requestAuth,
    {
      onSuccess: (data: any) => {
        reqSuccess(data);
      },
    }
  );

  if (isSuccess) {
    const { user } = data as any;
    navigate(`${user.role}/dashboard`);
  }

  const onSubmitHandler = async (data: ISignin) => {
    mutate(data);
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: 10 }}
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <InputAction
        label="E-mail"
        variant="outlined"
        fullWidth
        required
        type="email"
        name="email"
        onChange={handleChange}
      />
      <InputAction
        type="password"
        label="Senha"
        variant="outlined"
        fullWidth
        required
        name="password"
        onChange={handleChange}
      />
      {isError ? <ErrorMessage /> : null}
      <ButtonAction type="submit" fullWidth variant="contained">
        {!isLoading ? "Entrar" : <Loading color="secondary" />}
      </ButtonAction>
    </form>
  );
}
