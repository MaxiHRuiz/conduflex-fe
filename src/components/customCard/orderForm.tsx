import {
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import NumericFormatCustom from "components/NumericFormatCustom";
import { useAuth } from "context/Auth";
import { useTodo } from "context/TodoContext";
import React, { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IProductStock } from "types/order";
import { IProduct } from "types/product";

interface IOrderFromValues {
  isFractionate: boolean;
  meters: string;
  details: string;
}

const defaultValues: IOrderFromValues = {
  isFractionate: false,
  meters: "",
  details: "",
};

interface IOrderFromProps {
  product: IProduct;
}

const OrderForm = ({ product }: IOrderFromProps) => {
  const navigate = useNavigate();
  const { userSession } = useAuth();
  const { saveNewOrder, saveOrderProduct, order } = useTodo();
  const [values, setValues] = React.useState<IOrderFromValues>(defaultValues);

  const handleMetersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      meters: event.target.value,
    });
  };

  const handleIsFractionateChange = (
    event: SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    setValues({
      ...values,
      isFractionate: checked,
    });
  };

  const handleDetailsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      details: event.target.value,
    });
  };

  const generateOrder = () => {
    const newProduct: IProductStock = {
      id: (order?.productos?.length + 1).toString(),
      product_id: product.id,
      descripcion: product.descripcion,
      cantidad_metros: Number(values.meters),
      es_fraccionable: values.isFractionate,
      detalle: values.details,
      precio: product.precio,
      estado: ""
    };

    if (order.vendedor) {
      saveOrderProduct(newProduct);
      return;
    }

    saveNewOrder({
      vendedor: userSession?.user.email || "",
      productos: [newProduct],
      id: "",
      estado: "",
      actualizado_por: "",
      fecha: "",
      precio: 0,
      comprador: {
        nombre: "",
        cuit: "",
        cp: 0,
        direccion: ""
      }
    });
  };

  const handleGenerateOrder = () => {
    if (!values.meters) {
      toast.info("La cantidad de metros es obligatoria para generar un pedido");
      return;
    }

    generateOrder();
    navigate("/pedidos/nuevo");
  };

  const handleAddOrder = () => {
    if (!values.meters) {
      toast.info("La cantidad de metros es obligatoria para generar un pedido");
      return;
    }

    generateOrder();
    toast.info(
      `Se agrego el producto ${product.descripcion} al pedido pendiente`
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        py: 3,
        px: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        fullWidth
        label="Metros"
        size="small"
        color="secondary"
        value={values.meters}
        onChange={handleMetersChange}
        InputProps={{
          inputComponent: NumericFormatCustom as any,
        }}
      />
      <TextField
        fullWidth
        label="Detalles"
        size="small"
        color="secondary"
        type="text"
        value={values.details}
        onChange={handleDetailsChange}
      />
      <FormControlLabel
        name="isFractionate"
        control={<Checkbox />}
        label="¿Permite fraccionamiento?"
        value={values.isFractionate}
        onChange={handleIsFractionateChange}
      />

      <Button
        fullWidth
        variant="contained"
        size="small"
        onClick={handleGenerateOrder}
      >
        Generar pedido
      </Button>
      <Button
        fullWidth
        variant="outlined"
        color="secondary"
        size="small"
        onClick={handleAddOrder}
      >
        Agregar a Pedidos
      </Button>
    </Box>
  );
};

export default OrderForm;
