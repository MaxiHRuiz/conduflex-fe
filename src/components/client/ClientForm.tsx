import { Box, Grid, Paper, styled, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "../form/FormInputText";
import { IClientFormProps } from "./IClientFormProps";
import { IComprador } from "types/order";
import { FormInputCUIT } from "components/form/FormInputCUIT";
import TicketActions from "components/orderTicket/TicketActions";
import { useParams } from "react-router-dom";

const defaultValues: IComprador = {
  nombre: "",
  cuit: "",
  cp: 0,
  direccion: "",
};

export const ClientForm = ({
  comprador,
  isEdit,
  actionIsDisabled,
  onSubmitComprador,
  onCancel,
  onActiveUpdate,
}: IClientFormProps) => {
  const { handleSubmit, reset, control, setValue } = useForm<IComprador>({
    defaultValues: comprador ?? defaultValues,
  });
  const onSubmit = (data: IComprador) => {
    onSubmitComprador({
      nombre: data.nombre.toString(),
      cuit: data.cuit.toString(),
      cp: Number(data.cp),
      direccion: data.direccion.toString(),
    });
  };

  const FormGrid = styled(Grid)(() => ({
    display: "flex",
    flexDirection: "column",
  }));

  return (
    <Box
      sx={{
        display: !isEdit ? "grid" : undefined,
        gridRowGap: !isEdit ? "20px" : undefined,
      }}
    >
      {!isEdit ? (
        <div>
          <Typography fontWeight="bold">{`Cliente: ${
            comprador?.nombre || "-"
          }`}</Typography>
          <Typography fontWeight="bold">{`CUIT: ${
            comprador?.cuit || "-"
          }`}</Typography>
          <Typography fontWeight="bold">{`Dirección: ${
            comprador?.direccion || "-"
          }`}</Typography>
          <Typography fontWeight="bold">{`C.P.: ${
            comprador?.cp || "-"
          }`}</Typography>
        </div>
      ) : (
        <Grid container spacing={1} mt={1}>
          <FormGrid item xs={12} md={6}>
            <FormInputText
              name="nombre"
              control={control}
              label="Cliente"
              type="text"
              required
            />
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormInputCUIT name="cuit" control={control} label="CUIT" />
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormInputText
              name="cp"
              control={control}
              label="C.P."
              type="number"
              required
            />
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormInputText
              name="direccion"
              control={control}
              label="Dirección"
              type="text"
              required
            />
          </FormGrid>
        </Grid>
      )}
      {
        <div>
          <TicketActions
            disabledDelete
            editActive={!!isEdit}
            onConfirmUpdate={handleSubmit(onSubmit)}
            onCancel={onCancel}
            onActiveUpdate={onActiveUpdate}
            disabledActions={actionIsDisabled}
          />
        </div>
      }
    </Box>
  );
};
