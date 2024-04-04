import { createTheme } from "@mui/material";
import { grey, lightBlue } from "@mui/material/colors";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import type {} from "@mui/x-charts/themeAugmentation";

export const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[800],
    },
    secondary: {
      main: lightBlue[100],
    },
    text: {
      primary: "#ffffff",
      secondary: "#ffffff",
    },
  },
  components: {
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          backgroundColor: grey[600],
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          backgroundColor: grey[600],
        },
      },
    },
    MuiChartsTooltip: {
      styleOverrides: {
        row: {
          backgroundColor: grey[600],
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: lightBlue[100],
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: grey[600],
        },
      },
    },
  },
});
