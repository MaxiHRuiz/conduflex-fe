import { Footer } from "./components/footer/footer";
import ResponsiveAppBar from "./components/appBar/appBar";
import AppRoutes from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/Auth";
import { amber, grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material";
import TodoProvider from "./context/TodoContext";
import { ToastContainer, Bounce } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Saira-Regular", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: amber[500],
    },
    secondary: {
      main: grey[700],
    },
  },
});

export default function App() {
  return (
    <TodoProvider>
      <Router>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <ResponsiveAppBar />
            <AppRoutes />
            <Footer />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition={Bounce}
            />
          </ThemeProvider>
        </AuthProvider>
      </Router>
    </TodoProvider>
  );
}
