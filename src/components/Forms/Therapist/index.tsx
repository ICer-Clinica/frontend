import { Box, Divider } from "@mui/material";
import { useLocation } from "react-router-dom";
import { CreateOrEdit } from "../../../utils/functions/CreateOrEdit";
import PaperAtom from "../../atoms/PaperAtom";
import TitleText from "../../atoms/TitleText";
import TherapistForm from "../../molecules/TherapistForm";

export default function Therapist() {
  const { pathname } = useLocation();

  return (
    <Box>
      <TitleText color="primary.main" variant="h1">
        {CreateOrEdit(pathname)} terapeuta
      </TitleText>
      <Divider sx={{ marginBottom: "12px" }} />
      <PaperAtom size="100%">
        <TherapistForm />
      </PaperAtom>
    </Box>
  );
}
