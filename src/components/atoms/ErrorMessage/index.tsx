interface IErrorMessage {
  message?: string;
}

export default function ErrorMessage({
  message = "Alguma coisa deu errado. Tente novamente!",
}: IErrorMessage): JSX.Element {
  return <span style={{ color: "red", fontSize: ".9rem" }}>{message}</span>;
}
