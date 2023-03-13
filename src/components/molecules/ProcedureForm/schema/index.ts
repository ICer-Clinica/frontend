import * as yup from "yup";

export const schema = yup.object().shape({
  code: yup.string().required(),
  name: yup.string().required(),
  area: yup.string().required(),
});
