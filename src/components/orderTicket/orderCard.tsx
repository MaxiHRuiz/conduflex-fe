import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NumericFormatCustom from "components/NumericFormatCustom";
import OrderStockState from "components/OrderStockState";
import { SyntheticEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { IProductStock } from "types/order";
import { numberFormat } from "utils/helpers";
import TicketActions from "./TicketActions";
import DeliveryAction from "./DeliveryAction";

interface IOrderCardProps {
  orderStatus: string;
  productStock: IProductStock;
  disabledActions: boolean;
  generateOrderDisabled: (value: boolean) => void;
  onDelete: (productId: string) => void;
  onUpdate: (updateProduct: IProductStock) => void;
}

const OrderCard = ({
  orderStatus,
  productStock,
  disabledActions,
  generateOrderDisabled,
  onDelete,
  onUpdate,
}: IOrderCardProps) => {
  const { orderId = "" } = useParams();
  const [updateProduct, setUpdateProduct] = useState<IProductStock>({
    ...productStock,
  });
  const [editActive, setEditActive] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const status = [
    { value: "en_stock", label: "En stock" },
    {
      value: "listo_para_entregar",
      label: "Listo para entregar",
    },
    { value: "entregado", label: "Entregado" },
  ];

  const handleUpdate = () => {
    onUpdate(updateProduct);
    // updateOrderProduct(updateProduct as unknown as IProductStock);
    generateOrderDisabled(false);
    setEditActive(false);
  };

  const handleCancel = () => {
    generateOrderDisabled(false);
    setEditActive(false);
  };

  const handleActiveUpdate = () => {
    generateOrderDisabled(true);
    setEditActive(!editActive);
  };

  const handleDelete = () => {
    onDelete(updateProduct.id);
    // deleteOrderProduct(updateProduct.id)
    generateOrderDisabled(false);
    setEditActive(false);
  };

  const handleIsFractionateChange = (
    event: SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    setUpdateProduct({
      ...updateProduct,
      es_fraccionable: checked,
    });
  };

  const handleMetersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateProduct({
      ...updateProduct,
      cantidad_metros: Number(event.target.value),
    });
  };

  const handleDetailsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateProduct({
      ...updateProduct,
      detalle: event.target.value,
    });
  };

  return (
    <Paper sx={{ p: 2, mb: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          {fullScreen ? (
            <Box
              sx={{
                mb: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "end",
                  alignItems: "center",
                  width: "100%",
                  mb: 1,
                }}
              >
                {orderStatus === "aprobado" && (
                  <DeliveryAction
                    status={productStock.estado}
                    stockId={productStock.id}
                    orderId={orderId}
                    onUpdateOrder={() =>
                      onUpdate({
                        ...updateProduct,
                        estado: "listo_para_entregar",
                      })
                    }
                  />
                )}
              </Box>
              <Divider />
              <Typography
                component="h3"
                fontWeight="bold"
                sx={{ mt: 1 }}
              >{`${updateProduct.product_id} - ${updateProduct.descripcion}`}</Typography>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap-reverse",
                mb: 1,
              }}
            >
              <Typography
                component="h3"
                fontWeight="bold"
              >{`${updateProduct.product_id} - ${updateProduct.descripcion}`}</Typography>
              {orderStatus === "aprobado" && (
                <DeliveryAction
                  status={productStock.estado}
                  stockId={productStock.id}
                  orderId={orderId}
                  onUpdateOrder={() =>
                    onUpdate({
                      ...updateProduct,
                      estado: "listo_para_entregar",
                    })
                  }
                />
              )}
            </Box>
          )}

          <Divider />
        </Grid>
        {updateProduct.id && (
          <Grid item xs={12} md={6}>
            <Typography component="h4" gutterBottom>
              Cod: {updateProduct.id}
            </Typography>
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          {!orderId && editActive ? (
            <FormControlLabel
              name="isFractionate"
              control={<Checkbox />}
              label="¿Permite fraccionamiento?"
              checked={updateProduct.es_fraccionable}
              onChange={handleIsFractionateChange}
            />
          ) : (
            <Typography component="span">{`Es fraccionable: ${
              updateProduct.es_fraccionable ? "si" : "no"
            }`}</Typography>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          {!orderId && editActive ? (
            <TextField
              fullWidth
              label="Metros"
              size="small"
              color="secondary"
              value={updateProduct.cantidad_metros}
              onChange={handleMetersChange}
              InputProps={{
                inputComponent: NumericFormatCustom as any,
              }}
            />
          ) : (
            <Typography component="span">{`Metros de cable: ${numberFormat(
              updateProduct.cantidad_metros,
              false
            )} m.`}</Typography>
          )}
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <Typography component="span">{`Precio x m.: ${numberFormat(
            updateProduct.precio
          )}`}</Typography>
        </Grid> */}
        {!!updateProduct.estado && (
          <Grid item xs={12} md={6}>
            <OrderStockState state={updateProduct.estado} />
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          {editActive ? (
            <TextField
              fullWidth
              multiline
              rows={2}
              label="Detalles"
              size="small"
              color="secondary"
              type="text"
              value={updateProduct.detalle}
              onChange={handleDetailsChange}
            />
          ) : (
            <Typography component="span">{`Detalle: ${
              updateProduct.detalle || "No hay detalles"
            }`}</Typography>
          )}
        </Grid>
        {!orderStatus && (
          <Grid item xs={12}>
            <TicketActions
              editActive={editActive}
              disabledActions={disabledActions}
              onConfirmUpdate={handleUpdate}
              onCancel={handleCancel}
              onDelete={handleDelete}
              onActiveUpdate={handleActiveUpdate}
              disabledDelete={!!orderStatus}
            />
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};

export default OrderCard;
