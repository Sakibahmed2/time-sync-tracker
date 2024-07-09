import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fe8c00",
    },
    secondary: {
      main: "#b468ff",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "15px 24px",
        },
      },
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});
