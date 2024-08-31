import { Paper, Typography, Button, Box } from "@mui/material";
import { useTodo } from "context/TodoContext";
import { useParams } from "react-router-dom";

interface TicketFooter {
  disabled: boolean;
  total: string;
  onCreateOrder: () => void;
}

const TicketFooter = ({ disabled, total, onCreateOrder }: TicketFooter) => {
  const {deleteOrder} = useTodo()
  const { orderId } = useParams();
  return (
    <>
      <Paper
        sx={{
          p: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography fontWeight="bold">{`Total: ${total}`}</Typography>
        {!orderId && (
          <Box sx={{
            display: 'flex',
            gap: 1
          }}>
            <Button
              variant="contained"
              color="error"
              disabled={disabled}
              onClick={() => deleteOrder()}
            >
              Eliminar
            </Button>
            <Button
              variant="contained"
              disabled={disabled}
              onClick={onCreateOrder}
            >
              Hacer pedido
            </Button>
          </Box>
        )}
      </Paper>
    </>
  );
};

export default TicketFooter;
