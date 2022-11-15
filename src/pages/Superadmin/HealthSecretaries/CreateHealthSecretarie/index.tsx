import { Box, Divider } from "@mui/material";
import PaperAtom from "../../../../components/atoms/PaperAtom";
import TitleText from "../../../../components/atoms/TitleText";
import HealthSecretarieForm from "../../../../components/molecules/HealthSecretarieForm";

export default function CreateHealthSecretarie() {
  return (
    <Box>
      <TitleText color="primary.main" variant="h1">
        Cadastrar secretário de saúde
      </TitleText>
      <Divider sx={{ marginBottom: '12px' }} />
      <PaperAtom size="100%">
        <HealthSecretarieForm />
      </PaperAtom>
    </Box>
  );
}
