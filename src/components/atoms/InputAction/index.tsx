import { TextField } from "@mui/material";

interface InputActionProps {
  label: string;
  variant: "outlined" | "filled" | "standard";
  fullWidth?: boolean;
  size?: "100%" | "50%" | "75%" | "35%" | "25%";
  type?: "password" | "email" | "text";
  required?: boolean;
  disabled?: boolean;
  name?: string;
  onChange?: (event: any) => void;
  value?: string | number;
  shrink?: boolean;
}

export default function InputAction({
  label,
  variant,
  fullWidth,
  size,
  type,
  required,
  disabled,
  name,
  onChange,
  value,
  shrink,
}: InputActionProps) {
  return (
    <TextField
      label={label}
      variant={variant}
      fullWidth={fullWidth}
      type={type}
      required={required}
      disabled={disabled}
      name={name}
      onChange={onChange}
      sx={{ width: size }}
      value={value}
      InputLabelProps={{
        shrink: Boolean(shrink),
      }}
    />
  );
}
