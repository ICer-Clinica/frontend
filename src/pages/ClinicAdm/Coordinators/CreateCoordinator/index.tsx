import { Box, Divider } from "@mui/material";
import PaperAtom from "../../../../components/atoms/PaperAtom";
import TitleText from "../../../../components/atoms/TitleText";
import CoordinatorForm from "../../../../components/molecules/CoordinatorForm";

export default function CreateCoordinator() {
  return (
    <Box>
      <TitleText color="primary.main" variant="h1">
        Cadastrar coordenador
      </TitleText>
      <Divider sx={{ marginBottom: "12px" }} />
      <PaperAtom size="100%">
        <CoordinatorForm />
      </PaperAtom>
    </Box>
  );
}
