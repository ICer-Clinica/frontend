import { Box, Divider } from "@mui/material";
import { useLocation } from "react-router-dom";
import { CreateOrEdit } from "../../../utils/functions/CreateOrEdit";
import PaperAtom from "../../atoms/PaperAtom";
import TitleText from "../../atoms/TitleText";
import ClinicAdmForm from "../../molecules/ClinicAdmForm";

export default function ClinicAdm() {
  const { pathname } = useLocation();

  return (
    <Box>
      <TitleText color="primary.main" variant="h1">
        {CreateOrEdit(pathname)} administrador de clínica
      </TitleText>
      <Divider sx={{ marginBottom: "12px" }} />
      <PaperAtom size="100%">
        <ClinicAdmForm />
      </PaperAtom>
    </Box>
  );
}
