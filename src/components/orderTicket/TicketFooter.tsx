import { Paper, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";

interface TicketFooter {
  disabled: boolean;
  total: number;
  onCreateOrder: () => void;
}

const TicketFooter = ({ disabled, total, onCreateOrder }: TicketFooter) => {
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
          <Button
            variant="contained"
            disabled={disabled}
            onClick={onCreateOrder}
          >
            Hacer pedido
          </Button>
        )}
      </Paper>
    </>
  );
};

export default TicketFooter;
