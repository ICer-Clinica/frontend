import { Box, Divider } from "@mui/material";
import PaperAtom from "../../../../components/atoms/PaperAtom";
import TitleText from "../../../../components/atoms/TitleText";
import ClinicForm from "../../../../components/molecules/ClinicForm";

export default function CreateClinic() {
  return (
    <Box>
      <TitleText color="primary.main" variant="h1">
        Cadastrar clínica
      </TitleText>
      <Divider sx={{ marginBottom: '12px' }} />
      <PaperAtom size="100%">
        <ClinicForm />
      </PaperAtom>
    </Box>
  );
}
