import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ICostMaterials } from "types/cost";
import { useGetMaterials } from "services/hooks/useGetMaterials";
import {
  Box,
  Grid,
  TextField,
  InputAdornment,
  Typography,
  CircularProgress,
  Divider,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useUpdateMaterials } from "services/hooks/useUpdateMaterials";

const defaultValues: ICostMaterials = {
  alma_unipolar_pvc: 0,
  alma_unipolar_ls0h: 0,
  relleno_pvc: 0,
  relleno_ls0h: 0,
  masterbatch_pe: 0,
  xlpe: 0,
  hepr: 0,
  santoprene: 0,
  tpu_poliuretano: 0,
  pehd: 0,
  pvc: 0,
  vaina_taller: 0,
  vaina21781: 0,
  fleje_acero: 0,
  fleje_cu: 0,
  fleje_aluminio: 0,
  maylar: 0,
  dolar: 0,
  cobre: 0,
  cobre_estanado: 0,
};

export default function CostModal() {
  const { data, isFetching, refetch } = useGetMaterials();
  const { mutateAsync: update, isPending } = useUpdateMaterials();
  const [open, setOpen] = React.useState(false);
  const { control, handleSubmit, watch, reset } = useForm<ICostMaterials>({
    defaultValues: data ?? defaultValues,
  });
  const dolar = watch("dolar");

  React.useEffect(() => {
    if (open) refetch();
  }, [open]);

  React.useEffect(() => {
    reset(data);
  }, [isFetching]);

  const onSubmit = (data: ICostMaterials) => {
    update({
      alma_unipolar_pvc: Number(data.alma_unipolar_pvc),
      alma_unipolar_ls0h: Number(data.alma_unipolar_ls0h),
      relleno_pvc: Number(data.relleno_pvc),
      relleno_ls0h: Number(data.relleno_ls0h),
      masterbatch_pe: Number(data.masterbatch_pe),
      xlpe: Number(data.xlpe),
      hepr: Number(data.hepr),
      santoprene: Number(data.santoprene),
      tpu_poliuretano: Number(data.tpu_poliuretano),
      pehd: Number(data.pehd),
      pvc: Number(data.pvc),
      vaina_taller: Number(data.vaina_taller),
      vaina21781: Number(data.vaina21781),
      fleje_acero: Number(data.fleje_acero),
      fleje_cu: Number(data.fleje_cu),
      fleje_aluminio: Number(data.fleje_aluminio),
      maylar: Number(data.maylar),
      dolar: Number(data.dolar),
      cobre: Number(data.cobre),
      cobre_estanado: Number(data.cobre_estanado),
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        Cargar costos
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Precios</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {isFetching || isPending ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
              <Box
                sx={{
                  p: 2,
                  display: "grid",
                  gridRowGap: "20px",
                }}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} key="dolar">
                      <Controller
                        name="dolar"
                        control={control}
                        render={({ field }) => (
                          <Grid container alignItems="center">
                            <Grid item xs={6}>
                              <TextField
                                size="small"
                                {...field}
                                label="DOLAR"
                                type="number"
                                fullWidth
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      $
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Grid>
                          </Grid>
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} key="dolar">
                      <Divider />
                    </Grid>
                    {Object.keys(defaultValues)
                      .filter((key) => key !== "dolar")
                      .map((key) => (
                        <Grid item xs={12} key={key}>
                          <Controller
                            name={key as keyof ICostMaterials}
                            control={control}
                            render={({ field }) => (
                              <Grid container spacing={1} alignItems="center">
                                <Grid item xs={6}>
                                  <TextField
                                    size="small"
                                    {...field}
                                    label={key.replace(/_/g, " ").toUpperCase()}
                                    type="number"
                                    fullWidth
                                    InputProps={{
                                      startAdornment: (
                                        <InputAdornment position="start">
                                          $
                                        </InputAdornment>
                                      ),
                                    }}
                                  />
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography variant="subtitle1" align="right">
                                    {field.value} x {dolar} = {" "}
                                    <strong>
                                      ${" "}
                                      {(
                                        Number(field.value) * Number(dolar)
                                      ).toFixed(2)}
                                    </strong>
                                  </Typography>
                                </Grid>
                              </Grid>
                            )}
                          />
                        </Grid>
                      ))}
                  </Grid>
                </form>
              </Box>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button disabled={isFetching || isPending} onClick={handleClose}>
            Cerrar
          </Button>
          <Button
            disabled={isFetching || isPending}
            onClick={handleSubmit(onSubmit)}
          >
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
