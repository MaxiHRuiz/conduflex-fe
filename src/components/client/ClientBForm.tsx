import { Button, Grid, Paper, styled, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "../form/FormInputText";
import { IClientBFormProps } from "./IClientBFormProps";
import { useNavigate } from "react-router-dom";
import { IClient } from "types/client";
import { FormInputCUIT } from "components/form/FormInputCUIT";

const defaultValues: IClient = {
  nombre: "",
  cuit: "",
  telefono: "",
  email: "",
  notas: "",
  direccion: {
    cp: 0,
    provincia: "",
    ciudad: "",
    calle: "",
    numero: 0,
    departamento: "",
  },
};

export const ClientForm = ({
  title,
  client,
  isEdit,
  onSubmitClient,
}: IClientBFormProps) => {
  const { handleSubmit, reset, control, setValue } = useForm<IClient>({
    defaultValues: client ?? defaultValues,
  });

  const onSubmit = (data: IClient) => {
    onSubmitClient({
      nombre: String(data.nombre),
      cuit: String(data.cuit),
      telefono: String(data.telefono),
      email: String(data.email),
      notas: String(data.notas),
      direccion: {
        cp: Number(data.direccion.cp),
        provincia: String(data.direccion.provincia),
        ciudad: String(data.direccion.ciudad),
        calle: String(data.direccion.calle),
        numero: Number(data.direccion.numero),
        departamento: String(data.direccion.departamento),
      },
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

      <Grid container spacing={3}>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="nombre"
            control={control}
            label="Nombre"
            type="text"
            required="El nombre es requerido"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputCUIT name="cuit" control={control} label="CUIT" />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="telefono"
            control={control}
            label="Telefono"
            type="text"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="email"
            control={control}
            label="Email"
            type="text"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="notas"
            control={control}
            label="Notas"
            type="text"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="direccion.cp"
            control={control}
            label="C.P."
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="direccion.provincia"
            control={control}
            label="Provincia"
            type="text"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="direccion.ciudad"
            control={control}
            label="Ciudad"
            type="text"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="direccion.calle"
            control={control}
            label="Calle"
            type="text"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="direccion.numero"
            control={control}
            label="Numero"
            type="number"
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormInputText
            name="direccion.departamento"
            control={control}
            label="Piso/departamento"
            type="text"
          />
        </FormGrid>
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
