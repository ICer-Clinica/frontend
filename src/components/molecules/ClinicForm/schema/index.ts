import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required(),
  street: yup.string().required(),
  number: yup.number().required(),
  district: yup.string().required(),
  nameAdm: yup.string().required(),
  email: yup.string().email().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  cnpj: yup.string().required(),
  phone: yup.string().required(),
  clinicEmail: yup.string().nullable(),
});
