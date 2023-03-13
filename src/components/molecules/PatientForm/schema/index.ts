import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required(),
  sus_card: yup.string().required(),
  phone: yup.string().required(),
  cpf: yup.string().required(),
  birth_date: yup.string().required(),
});
