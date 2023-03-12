import { Icon } from "@iconify/react";
import { Box } from "@mui/material";
import TitleText from "../TitleText";

export default function NoResults() {
  return (
    <Box
      sx={{
        // backgroundColor: "red",
        width: "100%",
        height: "calc(100% - 3.6rem)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Icon icon="tabler:mood-confuzed" width={"10rem"} color="#F84B5A" />
      <TitleText variant="h3" color="secondary.contrastText">
        Não foram encontrados resultados para a busca.
      </TitleText>
    </Box>
  );
}
