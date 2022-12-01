import { Box, Divider } from "@mui/material";
import PaperAtom from "../../../../components/atoms/PaperAtom";
import TitleText from "../../../../components/atoms/TitleText";
import ProcedureForm from "../../../../components/molecules/ProcedureForm";

export default function CreateProcedure() {
  return (
    <Box>
      <TitleText color="primary.main" variant="h1">
        Cadastrar procedimento
      </TitleText>
      <Divider sx={{ marginBottom: "12px" }} />
      <PaperAtom size="100%">
        <ProcedureForm />
      </PaperAtom>
    </Box>
  );
}
