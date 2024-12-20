import { Box, Button, CircularProgress } from "@mui/material";
import { useUpdateFractionateState } from "services/hooks/useUpdateFractionateState";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useAppContext } from "context/RoleContext";

interface IFractionateButtonProps {
  id: string;
  state: string;
}

const FractionateButton = ({ id, state }: IFractionateButtonProps) => {
  const {role} = useAppContext()
  const { mutateAsync: update, isPending } = useUpdateFractionateState();

  if (isPending) return <CircularProgress size="1rem" />

  if (state === "pendiente_de_aprobacion") {
    return (
      <Box>
        <Button
          aria-label="Aprobar"
          size="small"
          variant="outlined"
          color="error"
          onClick={() => update({ estado: "rechazada", id })}
          // disabled={role !== 'admin'}
        >
          Rechazar
        </Button>
        <Button
          sx={{ ml: 1 }}
          aria-label="Aprobar"
          size="small"
          variant="outlined"
          color="success"
          onClick={() => update({ estado: "aprobada", id })}
          // disabled={role !== 'admin'}
        >
          Aprobar
        </Button>
      </Box>
    );
  }

  if (state === "aprobada") {
    return (
      <Button
        aria-label="Finalizar"
        size="small"
        variant="outlined"
        color="success"
        onClick={() => update({ estado: "finalizada", id })}
        // disabled={role !== "operator"}
      >
        Finalizar
      </Button>
    );
  }

  if (state === "rechazada") return <HighlightOffIcon color="error"/>

  if (state === "finalizada") return <CheckCircleOutlineIcon color="success" />


  return <></>;
};

export default FractionateButton;
