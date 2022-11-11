import { CircularProgress, CircularProgressProps } from "@mui/material";

export default function Loading(props: CircularProgressProps): JSX.Element {
  return (
    <CircularProgress {...props} />
  );
}
