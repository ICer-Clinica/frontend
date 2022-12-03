import { Box, Divider } from "@mui/material";
import { useLocation } from "react-router-dom";
import { CreateOrEdit } from "../../../utils/functions/CreateOrEdit";
import PaperAtom from "../../atoms/PaperAtom";
import TitleText from "../../atoms/TitleText";
import HealthSecretarieForm from "../../molecules/HealthSecretarieForm";

export default function HealthSecretary() {
  const { pathname } = useLocation();

  return (
    <Box>
      <TitleText color="primary.main" variant="h1">
        {CreateOrEdit(pathname)} secretário de saúde
      </TitleText>
      <Divider sx={{ marginBottom: "12px" }} />
      <PaperAtom size="100%">
        <HealthSecretarieForm />
      </PaperAtom>
    </Box>
  );
}
