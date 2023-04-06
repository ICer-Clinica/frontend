import TitleText from "../TitleText";
import { Box, Divider, Typography} from "@mui/material";

interface IPageTitle {
  title: string;
}

export default function PageTitle({ title }: IPageTitle): JSX.Element {
  return (
    <Box>
      <Typography color="primary.main" variant="h1" sx={(theme) => ({ 
        fontFamily: "Poppins",
        fontSize: '2.25rem',
        [theme.breakpoints.down('xl')]: {
          fontSize: '1.8rem',
        }
      })}>
      {title}
      </Typography>
      <Divider />
    </Box>
  );
}
