import { Box, Divider } from "@mui/material";
import PaperAtom from "../../../../components/atoms/PaperAtom";
import TitleText from "../../../../components/atoms/TitleText";
import ClinicAdmForm from "../../../../components/molecules/ClinicAdmForm";

export default function CreateClinicAdm() {
  return (
    <Box>
      <TitleText color="primary.main" variant="h1">
        Cadastrar administrador de clínica
      </TitleText>
      <Divider sx={{ marginBottom: "12px" }} />
      <PaperAtom size="100%">
        <ClinicAdmForm />
      </PaperAtom>
    </Box>
  );
}
