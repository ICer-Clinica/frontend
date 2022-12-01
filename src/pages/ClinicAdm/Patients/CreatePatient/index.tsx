import { Box, Divider } from "@mui/material";
import PaperAtom from "../../../../components/atoms/PaperAtom";
import TitleText from "../../../../components/atoms/TitleText";
import PatientForm from "../../../../components/molecules/PatientForm";

export default function CreatePatient() {
  return (
    <Box>
      <TitleText color="primary.main" variant="h1">
        Cadastrar paciente
      </TitleText>
      <Divider sx={{ marginBottom: "12px" }} />
      <PaperAtom size="100%">
        <PatientForm />
      </PaperAtom>
    </Box>
  );
}
