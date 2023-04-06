import { Box, Divider } from "@mui/material";
import { useLocation } from "react-router-dom";
import { CreateOrEdit } from "../../../utils/functions/CreateOrEdit";
import PageTitle from "../../atoms/PageTitle";
import PaperAtom from "../../atoms/PaperAtom";
import TherapistForm from "../../molecules/TherapistForm";

export default function Therapist() {
  const { pathname } = useLocation();

  return (
    <Box>
      <PageTitle title={`${CreateOrEdit(pathname)} terapeuta`} />
      <Divider sx={{ marginBottom: "12px" }} />
      <PaperAtom size="100%">
        <TherapistForm />
      </PaperAtom>
    </Box>
  );
}
