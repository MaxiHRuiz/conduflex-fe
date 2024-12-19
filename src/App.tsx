import { Footer } from "./components/footer/footer";
import ResponsiveAppBar from "./components/appBar/appBar";
import AppRoutes from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/Auth";
import { grey, yellow } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material";
import TodoProvider from "./context/TodoContext";
import { ToastContainer, Bounce } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import { AppProvider } from "context/RoleContext";
import { Suspense } from "react";
import Loading from "components/Loading";

const theme = createTheme({
  typography: {
    fontFamily: ["Saira-Regular", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: yellow[700],
    },
    secondary: {
      main: grey[600],
    },
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
});

export default function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <QueryClientProvider client={queryClient}>
          <TodoProvider>
            <Router>
              <ThemeProvider theme={theme}>
                <ResponsiveAppBar />
                <Suspense fallback={<Loading />}>
                  <AppRoutes />
                  <Footer />
                </Suspense>
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
            </Router>
          </TodoProvider>
        </QueryClientProvider>
      </AppProvider>
    </AuthProvider>
  );
}
