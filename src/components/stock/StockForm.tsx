import { Button, Grid, Paper, styled, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "../form/FormInputText";
import { IStockFormProps } from "./IStockFormProps";
import { useParams } from "react-router-dom";
import { IStock } from "types/stock";

const defaultValues: IStock = {
  id: "",
  descripcion: "",
  cantidad_metros: 0,
  cantidad_metros_vendidos: 0,
  detalle: "",
  product_id: "",
  cantidad_metros_restantes: 0,
  disponible: false,
  estado: "",
};

export const StockForm = ({
  title,
  subTitle,
  stock,
  isEdit,
  onSubmitStock,
}: IStockFormProps) => {
  const { productId } = useParams();
  const { handleSubmit, reset, control, setValue } = useForm<IStock>({
    defaultValues: stock ?? defaultValues,
  });
  const onSubmit = (data: IStock) => {
    onSubmitStock({
      product_id: String(data.product_id),
      descripcion: String(data.descripcion),
      cantidad_metros: Number(data.cantidad_metros),
      cantidad_metros_vendidos: Number(data.cantidad_metros_vendidos),
      cantidad_metros_restantes: Number(data.cantidad_metros_restantes),
      detalle: String(data.detalle),
      disponible: Boolean(data.disponible),
      estado: String(data.estado),
      id: String(data.id),
    });
  };

  const FormGrid = styled(Grid)(() => ({
    display: "flex",
    flexDirection: "column",
  }));

  return (
    <Paper
      sx={{
        p: 2,
        display: "grid",
        gridRowGap: "20px",
      }}
    >
      <Typography component="h1" variant="h4">
        {title}
      </Typography>
      <Typography component="h2" variant="h6">
        {subTitle}
      </Typography>

      <Grid container spacing={3}>
        {stock?.id && (
          <FormGrid item xs={12} md={6}>
            <FormInputText name="id" control={control} label="ID" type="text" />
          </FormGrid>
        )}
        {stock?.product_id && (
          <FormGrid item xs={12} md={6}>
            <FormInputText
              name="product_id"
              control={control}
              label="Product ID"
              type="text"
            />
          </FormGrid>
        )}
        {stock?.descripcion && (
          <FormGrid item xs={12} md={6}>
            <FormInputText
              name="descripcion"
              control={control}
              label="Descripción"
              type="text"
            />
          </FormGrid>
        )}
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="cantidad_metros"
            control={control}
            label="Cantidad de Metros"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="detalle"
            control={control}
            label="Detalle"
            type="text"
          />
        </FormGrid>
        {stock?.id && (
          <>
            <FormGrid item xs={12} md={6}>
              <FormInputText
                name="cantidad_metros_vendidos"
                control={control}
                label="Cantidad de Metros Vendidos"
                type="number"
              />
            </FormGrid>
            <FormGrid item xs={12} md={6}>
              <FormInputText
                name="cantidad_metros_restantes"
                control={control}
                label="Cantidad de Metros Restantes"
                type="number"
              />
            </FormGrid>

            <FormGrid item xs={12} md={6}>
              <FormInputText
                name="disponible"
                control={control}
                label="Disponible"
                type="checkbox"
              />
            </FormGrid>
            <FormGrid item xs={12} md={6}>
              <FormInputText
                name="estado"
                control={control}
                label="Estado"
                type="text"
              />
            </FormGrid>
          </>
        )}
      </Grid>

      <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
        {isEdit ? "Editar" : "Crear"}
      </Button>
      <Button onClick={() => reset()} variant={"outlined"}>
        Restablecer
      </Button>
    </Paper>
  );
};
