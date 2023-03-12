import { Typography } from "@mui/material";

interface TitleTextProps {
  children: string | any;
  color: "primary.main" | "primary.contrastText" | "secondary.contrastText";
  variant: "h1" | "h2" | "h3" | "body2" | "body1";
}

export default function TitleText({
  children,
  color,
  variant,
}: TitleTextProps) {
  return (
    <Typography color={color} variant={variant} sx={{ fontFamily: "Poppins" }}>
      {children}
    </Typography>
  );
}
