import * as yup from "yup";

export const schema = yup.object().shape({
    password: yup.string().min(6).max(32).required(),
    confirmPassword: yup.string().min(6).max(32).oneOf([yup.ref('password'), null], 'Senhas não são iguais').required(),
});
