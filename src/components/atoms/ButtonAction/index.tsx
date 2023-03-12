import { Button, CircularProgress } from "@mui/material";

interface ButtonActionProps {
  children: string | JSX.Element;
  variant: "text" | "contained" | "outlined";
  disabled?: boolean;
  type: "button" | "submit";
  fullWidth?: boolean;
  size?: "100%" | "50%" | "75%" | "35%" | "25%";
  isLoading?: boolean;
}

export default function ButtonAction({
  children,
  type,
  variant,
  disabled,
  fullWidth,
  size,
  isLoading,
}: ButtonActionProps) {
  return (
    <Button
      variant={variant}
      fullWidth={fullWidth}
      disabled={disabled}
      type={type}
      sx={{
        width: size,
        "&.MuiButton-root": {
          borderRadius: "20px",
        },
      }}
    >
      {!isLoading ? (
        children
      ) : (
        <CircularProgress
          color={variant === "contained" ? "secondary" : "primary"}
        />
      )}
    </Button>
  );
}
