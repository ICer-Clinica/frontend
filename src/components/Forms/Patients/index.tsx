import { Box, Divider } from "@mui/material";
import { useLocation } from "react-router-dom";
import { CreateOrEdit } from "../../../utils/functions/CreateOrEdit";
import PaperAtom from "../../atoms/PaperAtom";
import TitleText from "../../atoms/TitleText";
import PatientForm from "../../molecules/PatientForm";

export default function Patient() {
  const { pathname } = useLocation();

  return (
    <Box>
      <TitleText color="primary.main" variant="h1">
        {CreateOrEdit(pathname)} paciente
      </TitleText>
      <Divider sx={{ marginBottom: "12px" }} />
      <PaperAtom size="100%">
        <PatientForm />
      </PaperAtom>
    </Box>
  );
}
