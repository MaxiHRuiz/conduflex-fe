import {
  Paper,
  Grid,
  Box,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import ConfirmButton from "./ConfirmButton";
import { IClient } from "types/client";
import { useNavigate, useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/ModeEditOutline";

interface IclientProps {
  isOrderDescription?: boolean;
  client?: IClient;
  disabled?: boolean;
  onHandleDelete?: () => void;
  onHandleEdit?: () => void;
  hiddenDirectionData?: boolean;
}

const ClientCard = ({
  client,
  onHandleDelete,
  onHandleEdit,
  disabled,
  isOrderDescription,
  hiddenDirectionData,
}: IclientProps) => {
  const { orderId } = useParams();
  const dataMapper = (value: any) => (value ? value : "-");
  return (
    <Paper
      sx={{ padding: isOrderDescription ? 1 : 3 }}
      elevation={isOrderDescription ? 0 : undefined}
    >
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
                {client?.nombre}
              </Typography>
              {!isOrderDescription && (
                <IconButton
                  size="small"
                  sx={{ mx: 1 }}
                  aria-label="edit"
                  onClick={() => onHandleEdit?.()}
                >
                  <EditIcon />
                </IconButton>
              )}
            </Box>
            <div>
              {!isOrderDescription && (
                <ConfirmButton
                  buttonText="Eliminar"
                  dialogTitle="Confirmar acción"
                  dialogContent="¿Estás seguro de que deseas eliminar este cliente?"
                  buttonColor="error"
                  disabled={disabled}
                  onConfirm={() => onHandleDelete?.()}
                />
              )}
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">
            ID: {dataMapper(client?.id)}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">CUIT: {client?.cuit}</Typography>
        </Grid>
        {orderId === "nuevo" ? (
          <>
            {!hiddenDirectionData && (
              <>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1">
                    Teléfono: {client?.telefono}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1">
                    Email: {dataMapper(client?.email)}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1">
                    Notas: {dataMapper(client?.notas)}
                  </Typography>
                </Grid>
              </>
            )}
          </>
        ) : (
          <>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">
                Teléfono: {client?.telefono}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">
                Email: {dataMapper(client?.email)}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">
                Notas: {dataMapper(client?.notas)}
              </Typography>
            </Grid>
          </>
        )}

        {!hiddenDirectionData && (
          <>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                Dirección
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">
                Provincia: {dataMapper(client?.direccion.provincia)}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">
                Ciudad: {dataMapper(client?.direccion.ciudad)}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">
                Dirección: {dataMapper(client?.direccion.calle)}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">
                Nro.: {dataMapper(client?.direccion.numero)}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">
                Piso/Departamento: {dataMapper(client?.direccion.departamento)}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">
                C.P.: {dataMapper(client?.direccion.cp)}
              </Typography>
            </Grid>
            {orderId && (
              <>
                <Grid item xs={12}>
                  <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                    Vendedor
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1">
                    Provincia: {dataMapper(client?.vendedor?.nombre)}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1">
                    Ciudad: {dataMapper(client?.vendedor?.email)}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1">
                    Dirección: {dataMapper(client?.vendedor?.comision)}
                  </Typography>
                </Grid>
              </>
            )}
          </>
        )}
      </Grid>
    </Paper>
  );
};

export default ClientCard;
