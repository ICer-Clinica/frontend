import { Box, Divider } from "@mui/material";
import { useLocation } from "react-router-dom";
import PaperAtom from "../../../../components/atoms/PaperAtom";
import TitleText from "../../../../components/atoms/TitleText";
import HealthSecretarieForm from "../../../../components/molecules/HealthSecretarieForm";
import { CreateOrEdit } from "../../../../utils/functions/CreateOrEdit";

export default function CreateHealthSecretarie() {
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
