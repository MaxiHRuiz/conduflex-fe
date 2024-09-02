import React from "react";
import Button from "@mui/material/Button";
import { useDeliverProducts } from "services/hooks/useDeliverProducts";
import { CircularProgress } from "@mui/material";
import { useAppContext } from "context/RoleContext";

interface IDeliveryActionProps {
  status: string;
  stockId: string;
  orderId: string;
}

const DeliveryAction: React.FC<IDeliveryActionProps> = ({
  status,
  stockId,
  orderId,
}) => {
  const { mutateAsync: deliver, isPending } = useDeliverProducts(orderId);
  const {role} = useAppContext()

  const handleDeliveredClick = () => {
    deliver({ stocks: [stockId] });
  };

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
