import { Box, Grid, styled } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "../form/FormInputText";
import { IClientFormProps } from "./IClientFormProps";
import TicketActions from "components/orderTicket/TicketActions";
import { IClient, IClientDirection } from "types/client";
import ClientCard from "components/ClientCard";

const defaultValues: IClientDirection = {
  cp: 0,
  provincia: "",
  ciudad: "",
  calle: "",
  numero: 0,
  departamento: "",
};

export const ClientForm = ({
  client,
  isEdit,
  actionIsDisabled,
  onSubmitClient,
  onCancel,
  onActiveUpdate,
  estado,
}: IClientFormProps) => {
  const { handleSubmit, control } = useForm<IClientDirection>({
    defaultValues: client?.direccion ?? defaultValues,
  });
  const onSubmit = (data: IClientDirection) => {
    onSubmitClient({
      ...client,
      direccion: {
        cp: Number(data.cp),
        provincia: String(data.provincia),
        ciudad: String(data.ciudad),
        calle: String(data.calle),
        numero: Number(data.numero),
        departamento: String(data.departamento),
      },
    } as IClient);
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
      {client?.nombre && (
        <ClientCard
          hiddenDirectionData={isEdit}
          client={client}
          isOrderDescription
        />
      )}
      {isEdit && (
        <Grid container spacing={1} mt={1}>
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
        </Grid>
      )}
      {estado !== "finalizado" && (
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
