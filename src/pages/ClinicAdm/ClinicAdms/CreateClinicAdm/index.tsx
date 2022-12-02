import { Box, Divider } from "@mui/material";
import { useLocation } from "react-router-dom";
import PaperAtom from "../../../../components/atoms/PaperAtom";
import TitleText from "../../../../components/atoms/TitleText";
import ClinicAdmForm from "../../../../components/molecules/ClinicAdmForm";
import { CreateOrEdit } from "../../../../utils/functions/CreateOrEdit";

export default function CreateClinicAdm() {
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
