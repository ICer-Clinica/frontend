import { Box, Divider } from "@mui/material";
import { useLocation } from "react-router-dom";
import { CreateOrEdit } from "../../../utils/functions/CreateOrEdit";
import PaperAtom from "../../atoms/PaperAtom";
import TitleText from "../../atoms/TitleText";
import AdministrativeSecretarieForm from "../../molecules/AdministrativeSecretarieForm";

export default function AdministrativeSecretary() {
  const { pathname } = useLocation();

  return (
    <Box>
      <TitleText color="primary.main" variant="h1">
        {CreateOrEdit(pathname)} secretário administrativo
      </TitleText>
      <Divider sx={{ marginBottom: "12px" }} />
      <PaperAtom size="100%">
        <AdministrativeSecretarieForm />
      </PaperAtom>
    </Box>
  );
}
