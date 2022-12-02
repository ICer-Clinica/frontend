export const CreateOrEdit = (pathname: string) => {
  const label = pathname.includes("create") ? "Cadastrar" : "Editar";

  return label;
};
