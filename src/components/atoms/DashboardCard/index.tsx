import Paper from "@mui/material/Paper";
import TitleText from "../TitleText";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

interface IDashboardCard {
  title: string;
  value: string | number;
}

export default function DashboardCard({ title, value }: IDashboardCard) {
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.1rem",
        padding: "1rem 0",
        borderRadius: "20px",
        position: "relative",
      }}
    >
      <TitleText color="primary.main" variant="h2">
        {title}
      </TitleText>
      <TitleText color="secondary.contrastText" variant="h1">
        {value}
      </TitleText>
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="label"
        sx={{ position: "absolute", right: "1%", top: "2%" }}
      >
        <InfoIcon />
      </IconButton>
    </Paper>
  );
}
