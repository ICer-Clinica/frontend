import { createTheme } from "@mui/material";

const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#F84B5A",
      dark: "#DD404D",
      light: "#FE6270",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFFFFF",
      dark: "#156A37",
      light: "#24B55D",
      contrastText: "#A3A3A3",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Poppins",
      color: "#F0F0F0",
    },
    h1: {
      fontSize: "36px",
      fontWeight: 700,
      lineHeight: "48px",
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: "26px",
      fontWeight: 600,
      lineHeight: "35px",
      letterSpacing: "-2%",
    },
    h3: {
      fontSize: "26px",
      fontWeight: 600,
      lineHeight: "35px",
      letterSpacing: "-2%",
      color: "#3c3c3c",
    },
    subtitle1: {
      fontWeight: 500,
      letterSpacing: "-2%",
      lineHeight: "27px",
      fontSize: "18px",
      color: "#7C7C7C",
    },
    subtitle2: {
      fontWeight: 700,
      letterSpacing: "-2%",
      lineHeight: "19.5px",
      fontSize: "13px",
      color: "#F54A48",
    },
    body1: {
      fontWeight: 500,
      letterSpacing: "-2%",
      lineHeight: "24px",
      fontSize: "16px",
      color: "#495057",
    },
    button: {
      textTransform: "capitalize",
      fontWeight: 600,
      letterSpacing: "-3%",
      lineHeight: "16.8px",
      fontSize: "14px",
      color: "#FFFFFF",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          height: "55px",
          "& .css-1jk7pvw-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              border: "0.5px solid #1F2E36",
              borderRadius: "20px",
            },
          "& .css-1c7fqs-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
            color: "#1F2E36",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: "45px",
        },
        outlined: {
          borderColor: "#F84B5A",
        },
      },
    },
  },
});

export default LightTheme;
