import {
  BaseTextFieldProps,
  OutlinedTextFieldProps,
  TextField,
  TextFieldProps,
} from "@mui/material";

export default function InputAction(props: TextFieldProps) {
  const { size } = props;

  return (
    <TextField
      sx={{
        width: size,
        "& .MuiOutlinedInput-root": {
          borderRadius: "20px",
        },
      }}
      InputLabelProps={{
        shrink: true,
      }}
      {...props}
    />
  );
}
