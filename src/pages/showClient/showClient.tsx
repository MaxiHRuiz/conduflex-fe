import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import CustomContainer from "../../components/customContainer/CustomContainer";
import { useNavigate, useParams } from "react-router-dom";
import { useGetClient } from "services/hooks/useGetClient";
import EditIcon from "@mui/icons-material/Edit";
import { useDeleteClient } from "services/hooks/useDeleteClient";
import ConfirmButton from "components/ConfirmButton";
import Loading from "components/Loading";

const Content = () => {
  const { clientId = "" } = useParams();
  const { data: clientData, isError, isFetching } = useGetClient(clientId);
  const { mutateAsync: deleteClient, isPending } = useDeleteClient();
  const navigate = useNavigate();

  if (isPending || isFetching) return <Loading />;

  if (isError)
    return <Typography>Hubo un error al obtener la el cliente</Typography>;

  return (
    <Paper sx={{ padding: 3 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography variant="h5" component="h1">
                {clientData?.nombre}
              </Typography>
              <IconButton
                size="small"
                sx={{ mx: 1 }}
                aria-label="edit"
                onClick={() => navigate(`/clientes/${clientId}/editar`)}
              >
                <EditIcon />
              </IconButton>
            </Box>
            <div>
              <ConfirmButton
                buttonText="Eliminar"
                dialogTitle="Confirmar acción"
                dialogContent="¿Estás seguro de que deseas eliminar este cliente?"
                buttonColor="error"
                disabled={isPending}
                onConfirm={() => deleteClient(clientId)}
              />
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">ID: {clientData?.id}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">CUIT: {clientData?.cuit}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">
            Teléfono: {clientData?.telefono}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Email: {clientData?.email}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">
            Provincia: {clientData?.direccion.provincia}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">
            Ciudad: {clientData?.direccion.ciudad}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">
            Dirección: {clientData?.direccion.calle}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">
            Nro.: {clientData?.direccion.numero}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">
            Piso/Departamento: {clientData?.direccion.departamento}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">
            C.P.: {clientData?.direccion.cp}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">
            Notas: {clientData?.notas ?? "-"}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

const ShowClient = () => {
  return (
    <CustomContainer breadCrumbs>
      <Content />
    </CustomContainer>
  );
};

export default ShowClient;
