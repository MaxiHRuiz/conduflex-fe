import { Button, Paper, Typography } from "@mui/material";
import CustomContainer from "components/customContainer/CustomContainer";
import Loading from "components/Loading";
import OrderCard from "components/orderTicket/orderCard";
import OrderTicket from "components/orderTicket/orderTicket";
import { useTodo } from "context/TodoContext";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateOrder } from "services/hooks/useCreateOrder";
import { numberFormat } from "utils/helpers";

const NewOrder = () => {
  const { order, deleteOrder } = useTodo();

  return (
    <CustomContainer breadCrumbs>
      <Typography component="h1" variant="h5" gutterBottom>
        Pedido
      </Typography>
      <OrderTicket order={order} />
    </CustomContainer>
  );
};

export default NewOrder;
