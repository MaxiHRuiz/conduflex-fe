import {
  Button,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomContainer from "../../components/customContainer/CustomContainer";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <CustomContainer>
      <Paper
        sx={{
          marginY: 8,
          padding: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Typography component="h1" variant="h1" gutterBottom>
          404 :(
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
          La página que buscas no existe.
        </Typography>
        <br />
        <Button variant="contained" onClick={() => navigate("/")}>
          Ir a página principal
        </Button>
      </Paper>
    </CustomContainer>
  );
};

export default NotFound;
