import React from "react";
import Button from "@mui/material/Button";
import { useDeliverProducts } from "services/hooks/useDeliverProducts";
import { CircularProgress } from "@mui/material";
import { useAppContext } from "context/RoleContext";
import { blue } from "@mui/material/colors";

interface IDeliveryActionProps {
  status: string;
  stockId: string;
  orderId: string;
  onUpdateOrder: () => void
}

const DeliveryAction: React.FC<IDeliveryActionProps> = ({
  status,
  stockId,
  orderId,
  onUpdateOrder
}) => {
  const { mutateAsync: deliver, isPending } = useDeliverProducts(orderId);

  const {role} = useAppContext()

  const handleUpdateClick = () => {
    onUpdateOrder();
  };

  const handleDeliveredClick = () => {
    deliver({ stocks: [stockId] });
  };

  if (status === "en_stock")
    return (
      <Button
        endIcon={
          isPending ? (
            <CircularProgress color="secondary" size={20} />
          ) : undefined
        }
        disabled={isPending}
        size="small"
        variant="contained"
        onClick={handleUpdateClick}
        sx={{
          bgcolor: blue[600],
          color: 'white',
          "&:hover": {
            backgroundColor: blue[800],
          }
        }}
      >
        Listo para entregar
      </Button>
    );

  if (status === "listo_para_entregar" || status === "en_stock")
    return (
      <Button
        endIcon={
          isPending ? (
            <CircularProgress color="secondary" size={20} />
          ) : undefined
        }
        disabled={isPending || role !== 'admin'}
        size="small"
        color="success"
        variant="contained"
        onClick={handleDeliveredClick}
      >
        Entregado
      </Button>
    );

  return <></>;
};

export default DeliveryAction;
