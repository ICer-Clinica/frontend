import TitleText from "../TitleText";
import { Box, Divider } from "@mui/material";

interface IPageTitle {
  title: string;
}

export default function PageTitle({ title }: IPageTitle): JSX.Element {
  return (
    <Box>
      <TitleText color="primary.main" variant="h1">
        {title}
      </TitleText>
      <Divider />
    </Box>
  );
}
