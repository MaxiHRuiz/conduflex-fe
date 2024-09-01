import { Grid, styled, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetStockById } from "services/hooks/useGetStockById";
import Loading from "./Loading";
import StockDetailCard from "./StockDetailCard";
import FractionateCard from "./FractionateCard";
import { useAppContext } from "context/RoleContext";
import { useUpdateStockById } from "services/hooks/useUpdateStockById";

export const StockDetails = () => {
  const { productId = "", stockId = "" } = useParams();

  const { data, isFetching, isError } = useGetStockById(productId, stockId);
  const { mutateAsync: updateStock, isPending } = useUpdateStockById(
    productId,
    stockId
  );
  const { role } = useAppContext();

  const handleAprove = () => {
    if (!data) return;
    updateStock({ ...data, estado: 'en_stock' });
  };

  if (isFetching) return <Loading />;

  if (isError)
    return <Typography>Error al obtener los detalles de stocks</Typography>;

  return (
    <>
      <Typography component="h1" variant="h5" gutterBottom>
        Detalle de Stock
      </Typography>
      <StockDetailCard
        data={data}
        stockId={stockId}
        productId={productId}
        onAprobeStock={handleAprove}
      />
      {data?.estado === "no_disponible" && role !== "admin" && (
        <Typography m={1}>
          Solo un administrador puede aprobar este stock.
        </Typography>
      )}
      {!data?.disponible && role === "admin" && (
        <Typography m={1}>
          Este producto no se encuentra disponible para fraccionar.
        </Typography>
      )}
      {role == "admin" && (
        <FractionateCard disabled={!data?.disponible && role === "admin"} />
      )}
    </>
  );
};
