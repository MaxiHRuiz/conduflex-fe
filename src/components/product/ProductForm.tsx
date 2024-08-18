import { Button, Grid, Paper, styled, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "../form/FormInputText";
import { IProductFormProps } from "./IProductFormProps";
import { useNavigate } from "react-router-dom";
import { IProduct } from "types/product";

const defaultValues: IProduct = {
  descripcion: "",
  espesor_aislacion_promedio: 0,
  espesor_aislacion_minimo: 0,
  espesor_envoltura_promedio: 0,
  espesor_envoltura_minimo: 0,
  diametro_nominal: 0,
  diametro_maximo_extremo: 0,
  resist_aislacion_70c: 0,
  tension_electrodos: "",
  resist_electrica_20c: 0,
  tension_en_agua: 0,
  cantidad_hilos: 0,
  diametros_hilos: 0,
  diametro_cuerda: 0,
  pico_cuerda: 0,
  diametro_conductor_calculado: 0,
  diametro_conductor_Produccion: 0,
  matriz: "",
  cantidad_almas: 0,
  diametro_cableado: 0,
  pico_relleno: 0,
  diametro_relleno_calculado: 0,
  diametro_relleno_produccion: 0,
  espesor: 0,
  diametro_sobre_fleje: 0,
  diametro_envoltura_calculado: 0,
  diametro_envoltura_produccion: 0,
  matriz_envoltura: 0,
  kgs_a: 0,
  kgs_r: 0,
  kgs_v: 0,
  kgs_cu: 0,
  kgs_totales: 0,
  kgs_terminado: 0,
  kgs_produccion: 0,
  kgs_armadura_metalica: 0,
  paso: "",
  matriz_relleno: "",
  pico: "",
  obs1: "",
  obs2: "",
  obs3: "",
  paso_final: "",
  precio: 0,
  hay_stock: false,
  id: "",
};

export const ProductForm = ({
  title,
  product,
  isEdit,
  onSubmitProduct,
}: IProductFormProps) => {
  const navigate = useNavigate();
  const { handleSubmit, reset, control, setValue } = useForm<IProduct>({
    defaultValues: product ?? defaultValues,
  });
  const onSubmit = (data: IProduct) => {
    onSubmitProduct(data);
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

      <Grid container spacing={3}>
        <FormGrid item xs={12} md={6}>
          <FormInputText name="id" control={control} label="Código" type="text" />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="descripcion"
            control={control}
            label="Descripción"
            type="text"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="espesor_aislacion_promedio"
            control={control}
            label="Espesor Aislación Promedio"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="espesor_aislacion_minimo"
            control={control}
            label="Espesor Aislación Mínimo"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="espesor_envoltura_promedio"
            control={control}
            label="Espesor Envoltura Promedio"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="espesor_envoltura_minimo"
            control={control}
            label="Espesor Envoltura Mínimo"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="diametro_nominal"
            control={control}
            label="Diámetro Nominal"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="diametro_maximo_extremo"
            control={control}
            label="Diámetro Máximo Extremo"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="resist_aislacion_70c"
            control={control}
            label="Resistencia Aislación 70°C"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="tension_electrodos"
            control={control}
            label="Tensión Electrodos"
            type="text"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="resist_electrica_20c"
            control={control}
            label="Resistencia Eléctrica 20°C"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="tension_en_agua"
            control={control}
            label="Tensión en Agua"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="cantidad_hilos"
            control={control}
            label="Cantidad de Hilos"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="diametros_hilos"
            control={control}
            label="Diámetros de Hilos"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="diametro_cuerda"
            control={control}
            label="Diámetro de Cuerda"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="pico_cuerda"
            control={control}
            label="Pico de Cuerda"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="diametro_conductor_calculado"
            control={control}
            label="Diámetro Conductor Calculado"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="diametro_conductor_Produccion"
            control={control}
            label="Diámetro Conductor Producción"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="matriz"
            control={control}
            label="Matriz"
            type="text"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="cantidad_almas"
            control={control}
            label="Cantidad de Almas"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="diametro_cableado"
            control={control}
            label="Diámetro Cableado"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="pico_relleno"
            control={control}
            label="Pico Relleno"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="diametro_relleno_calculado"
            control={control}
            label="Diámetro Relleno Calculado"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="diametro_relleno_produccion"
            control={control}
            label="Diámetro Relleno Producción"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="espesor"
            control={control}
            label="Espesor"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="diametro_sobre_fleje"
            control={control}
            label="Diámetro sobre Fleje"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="diametro_envoltura_calculado"
            control={control}
            label="Diámetro Envoltura Calculado"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="diametro_envoltura_produccion"
            control={control}
            label="Diámetro Envoltura Producción"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="matriz_envoltura"
            control={control}
            label="Matriz Envoltura"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="kgs_a"
            control={control}
            label="Kgs A"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="kgs_r"
            control={control}
            label="Kgs R"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="kgs_v"
            control={control}
            label="Kgs V"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="kgs_cu"
            control={control}
            label="Kgs Cu"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="kgs_totales"
            control={control}
            label="Kgs Totales"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="kgs_terminado"
            control={control}
            label="Kgs Terminado"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="kgs_produccion"
            control={control}
            label="Kgs Producción"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="kgs_produccion"
            control={control}
            label="Kgs Producción"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="kgs_armadura_metalica"
            control={control}
            label="Kgs Armadura Metálica"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="paso"
            control={control}
            label="Paso"
            type="text"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="matriz_relleno"
            control={control}
            label="Matriz Relleno"
            type="text"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="pico"
            control={control}
            label="Pico"
            type="text"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="obs1"
            control={control}
            label="Observación 1"
            type="text"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="obs2"
            control={control}
            label="Observación 2"
            type="text"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="obs3"
            control={control}
            label="Observación 3"
            type="text"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="paso_final"
            control={control}
            label="Paso Final"
            type="text"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="precio"
            control={control}
            label="Precio"
            type="number"
          />
        </FormGrid>
        {/* <FormGrid item xs={12} md={6}>
          <FormInputText
            name="hay_stock"
            control={control}
            label="Hay Stock"
            type="checkbox"
          />
        </FormGrid> */}
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
