import { Box, Typography } from "@mui/material";
import { useAuth } from "context/Auth";
import React from "react";
import { IOrder } from "types/order";

interface OrderListProps {
  order: IOrder;
}

const OrderListContent: React.FC<OrderListProps> = ({ order }) => {
  const { userSession } = useAuth();

  const getListContent = () => {
    if (!order.product_stock.length) {
      return <Typography>No hay pedidos pendientes</Typography>;
    }

    return (
      <>
        <Typography noWrap gutterBottom>
          Generaste este pedido.
        </Typography>
        <Typography noWrap gutterBottom>
          Si queres modificarlo o confirmarlo hace clic en la lista.
        </Typography>
        <ul>
          {order.product_stock.map((product) => (
            <li key={product.id}>
              <span>{`${product.product_id} - ${product.descripcion}: ${product.cantidad_metros} mts.`}</span>
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        border: 1,
        borderRadius: 1,
        m: 1,
        pb: 2,
        p: 1,
        pr: 2,
        maxWidth: 400,
        wordWrap: "break-word",
      }}
    >
      <Typography
        noWrap
        gutterBottom
      >{`Hola ${userSession?.user.email}`}</Typography>
      {getListContent()}
    </Box>
  );
};

export default OrderListContent;