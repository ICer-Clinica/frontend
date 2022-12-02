import { Box, Divider } from "@mui/material";
import { useLocation } from "react-router-dom";
import PaperAtom from "../../../../components/atoms/PaperAtom";
import TitleText from "../../../../components/atoms/TitleText";
import ProcedureForm from "../../../../components/molecules/ProcedureForm";
import { CreateOrEdit } from "../../../../utils/functions/CreateOrEdit";

export default function CreateProcedure() {
  const { pathname } = useLocation();

  return (
    <Box>
      <TitleText color="primary.main" variant="h1">
        {CreateOrEdit(pathname)} procedimento
      </TitleText>
      <Divider sx={{ marginBottom: "12px" }} />
      <PaperAtom size="100%">
        <ProcedureForm />
      </PaperAtom>
    </Box>
  );
}
