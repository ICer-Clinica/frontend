import { Box, Divider } from "@mui/material";
import PaperAtom from "../../../../components/atoms/PaperAtom";
import TitleText from "../../../../components/atoms/TitleText";
import TherapistForm from "../../../../components/molecules/TherapistForm";

export default function CreateTherapist() {
  return (
    <Box>
      <TitleText color="primary.main" variant="h1">
        Cadastrar procedimento
      </TitleText>
      <Divider sx={{ marginBottom: "12px" }} />
      <PaperAtom size="100%">
        <TherapistForm />
      </PaperAtom>
    </Box>
  );
}
