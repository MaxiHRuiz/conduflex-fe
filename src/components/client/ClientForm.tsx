import { Box, Divider, Grid, styled, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "../form/FormInputText";
import { IClientFormProps } from "./IClientFormProps";
import TicketActions from "components/orderTicket/TicketActions";
import { IClient, IClientDirection, IClientFormData } from "types/client";
import ClientCard from "components/ClientCard";

interface IOrderForm {
  cp: number;
  provincia: string;
  ciudad: string;
  calle: string;
  numero: number;
  departamento: string;
  nombreVendedor: string;
  emailVendedor: string;
  comisionVendedor: number;
  emailCliente: string;
  telefonoCliente: string;
  notasCliente: string;
}

const defaultValues: IOrderForm = {
  cp: 0,
  provincia: "",
  ciudad: "",
  calle: "",
  numero: 0,
  departamento: "",
  nombreVendedor: "",
  emailVendedor: "",
  comisionVendedor: 0,
  emailCliente: "",
  telefonoCliente: "",
  notasCliente: "",
};

export const ClientForm = ({
  order,
  isEdit,
  actionIsDisabled,
  onSubmitClient,
  onCancel,
  onActiveUpdate,
  estado,
}: IClientFormProps) => {
  const { handleSubmit, control } = useForm<IOrderForm>({
    defaultValues: {
      cp: order?.comprador?.direccion.cp,
      provincia: order?.comprador?.direccion.provincia,
      ciudad: order?.comprador?.direccion.ciudad,
      calle: order?.comprador?.direccion.calle,
      numero: order?.comprador?.direccion.numero,
      departamento: order?.comprador?.direccion.departamento,
      nombreVendedor: order?.comprador?.vendedor?.nombre,
      emailVendedor: order?.comprador?.vendedor?.email,
      comisionVendedor: order?.comprador?.vendedor?.comision,
      emailCliente: order?.comprador?.email,
      telefonoCliente: order?.comprador?.telefono,
      notasCliente: order?.comprador?.notas,
    },
  });
  const onSubmit = (data: IOrderForm) => {
    onSubmitClient({
      direccion: {
        ciudad: String(data.ciudad),
        provincia: String(data.provincia),
        calle: String(data.calle),
        numero: Number(data.numero),
        departamento: String(data.departamento),
        cp: Number(data.cp),
      },
      comprador: {
        email: String(data.emailCliente),
        telefono: String(data.telefonoCliente),
        notas: String(data.notasCliente),
      },
      vendedor: {
        nombre: String(data.nombreVendedor),
        email: String(data.emailVendedor),
        comision: Number(data.comisionVendedor),
      },
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
      {order?.comprador?.nombre && (
        <ClientCard
          hiddenDirectionData={isEdit}
          client={order.comprador}
          isOrderDescription
        />
      )}
      {isEdit && (
        <Grid container spacing={1} mt={1}>
          {order?.id && (
            <>
              <FormGrid item xs={12} md={6}>
                <FormInputText
                  name="telefonoCliente"
                  control={control}
                  label="Teléfono del Cliente"
                  type="text"
                />
              </FormGrid>
              <FormGrid item xs={12} md={6}>
                <FormInputText
                  name="emailCliente"
                  control={control}
                  label="Email del Cliente"
                  type="email"
                />
              </FormGrid>

              <FormGrid item xs={12} md={6}>
                <FormInputText
                  name="notasCliente"
                  control={control}
                  label="Notas del Cliente"
                  type="text"
                />
              </FormGrid>
            </>
          )}

          <FormGrid item xs={12}>
            <Divider sx={{ my: 1 }} />
            <Typography component="h3" variant="h6">
              Dirección
            </Typography>
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormInputText
              name="provincia"
              control={control}
              label="Provincia"
              type="text"
            />
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormInputText
              name="ciudad"
              control={control}
              label="Ciudad"
              type="text"
            />
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormInputText
              name="calle"
              control={control}
              label="Calle"
              type="text"
            />
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormInputText
              name="numero"
              control={control}
              label="Numero"
              type="number"
            />
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormInputText
              name="departamento"
              control={control}
              label="Piso/departamento"
              type="text"
            />
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormInputText
              name="cp"
              control={control}
              label="C.P."
              type="number"
            />
          </FormGrid>
          {order?.id && (
            <>
              <FormGrid item xs={12}>
                <Divider sx={{ my: 1 }} />
                <Typography component="h3" variant="h6">
                  Vendedor
                </Typography>
              </FormGrid>
              <FormGrid item xs={12} md={6}>
                <FormInputText
                  name="nombreVendedor"
                  control={control}
                  label="Nombre del Vendedor"
                  type="text"
                />
              </FormGrid>
              <FormGrid item xs={12} md={6}>
                <FormInputText
                  name="emailVendedor"
                  control={control}
                  label="Email del Vendedor"
                  type="email"
                />
              </FormGrid>
              <FormGrid item xs={12} md={6}>
                <FormInputText
                  name="comisionVendedor"
                  control={control}
                  label="Comisión del Vendedor"
                  type="number"
                />
              </FormGrid>
            </>
          )}
        </Grid>
      )}
      {order?.comprador?.id && estado !== "finalizado" && (
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
      )}
    </Box>
  );
};
