import {
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { useAuth } from "context/Auth";
import { useTodo } from "context/TodoContext";
import React, { SyntheticEvent } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IProductStock } from "types/order";
import { IProduct } from "types/product";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumericFormatCustom = React.forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator="."
        decimalSeparator=","
        valueIsNumericString
      />
    );
  }
);

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
      id: order.product_stock.length + 1,
      product_id: product.id,
      descripcion: product.descripcion,
      cantidad_metros: Number(values.meters),
      es_fraccionable: values.isFractionate,
      detalle: values.details,
    };

    if (order.vendor) {
      saveOrderProduct(newProduct);
      return;
    }

    saveNewOrder({
      vendor: userSession?.user.email || "",
      product_stock: [newProduct],
      id: ""
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
