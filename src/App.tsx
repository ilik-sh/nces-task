import { BrowserRouter } from "react-router-dom";
import AppRoutes from "app.routes";
import { ThemeProvider } from "@mui/material";
import { theme } from "themes/theme";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "components/error.page";
import { SnackbarProvider } from "notistack";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <>
      <ErrorBoundary fallback={<ErrorPage />}>
        <SnackbarProvider>
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
            </LocalizationProvider>
          </ThemeProvider>
        </SnackbarProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
