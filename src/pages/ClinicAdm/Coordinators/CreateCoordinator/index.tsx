import { Box, Divider } from "@mui/material";
import { useLocation } from "react-router-dom";
import PaperAtom from "../../../../components/atoms/PaperAtom";
import TitleText from "../../../../components/atoms/TitleText";
import CoordinatorForm from "../../../../components/molecules/CoordinatorForm";
import { CreateOrEdit } from "../../../../utils/functions/CreateOrEdit";

export default function CreateCoordinator() {
  const { pathname } = useLocation();

  return (
    <Box>
      <TitleText color="primary.main" variant="h1">
        {CreateOrEdit(pathname)} coordenador
      </TitleText>
      <Divider sx={{ marginBottom: "12px" }} />
      <PaperAtom size="100%">
        <CoordinatorForm />
      </PaperAtom>
    </Box>
  );
}
