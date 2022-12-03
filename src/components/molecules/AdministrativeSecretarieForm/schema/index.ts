import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(32).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Senhas não são iguais")
    .min(6)
    .max(32)
    .required(),
});
