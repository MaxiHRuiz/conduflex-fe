import {
  Box,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import CustomContainer from "../../components/customContainer/CustomContainer";
import { GridPaginationModel, GridRowSelectionModel } from "@mui/x-data-grid";
import React from "react";
import { useGetFractionates } from "services/hooks/useGetFractionates";
import FractionateTable from "components/DataTable/FractionTable";
import { useAppContext } from "context/RoleContext";

const Stocks = () => {
  const { role } = useAppContext();

  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [product_id, setProduct_id] = React.useState("");
  const [stock_id, setStock_id] = React.useState("");
  const [estado, setEstado] = React.useState<string>(
    role === "admin"
      ? "pendiente_de_aprobacion"
      : role === "operator"
      ? "aprobada"
      : "todos"
  );

  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>([]);

  const { data, isFetching, isError } = useGetFractionates({
    offset: page * rowsPerPage,
    limit: rowsPerPage,
    email,
    product_id,
    stock_id,
    estado: estado === "todos" ? "" : estado,
  });

  const onChangePagination = (pagination: GridPaginationModel) => {
    if (page !== pagination.page) {
      setPage(pagination.page);
      return;
    }
    if (rowsPerPage !== pagination.pageSize)
      setRowsPerPage(pagination.pageSize);
  };

  const onChangeEmailSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(e.target.value);
  };

  const handleProduct_idChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProduct_id(e.target.value as string);
  };

  const handleStock_idChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setStock_id(e.target.value as string);
  };

  const handleStatusChange = (event: SelectChangeEvent) => {
    setEstado(event.target.value as string);
  };

  if (isError) return <Typography>Error al cargar los stocks</Typography>;

  return (
    <CustomContainer>
      <Box
        sx={{
          mb: 1,
        }}
      >
        <Typography component="h1" variant="h5" gutterBottom>
          Fraccionamiento
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ mb: 1 }}>
        <Grid item md={3} xs={12}>
          <TextField
            value={email}
            onChange={onChangeEmailSearch}
            size="small"
            label="Email"
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <TextField
            value={product_id}
            onChange={handleProduct_idChange}
            size="small"
            label="Producto"
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <TextField
            value={stock_id}
            onChange={handleStock_idChange}
            size="small"
            label="Stock"
          />
        </Grid>

        <Grid item md={3} xs={12}>
          <FormControl fullWidth size="small" sx={{ width: 200 }}>
            <InputLabel id="available-select-label">Estado</InputLabel>
            <Select
              labelId="available-select-label"
              id="available-select"
              value={estado}
              label="Estado"
              onChange={handleStatusChange}
            >
              <MenuItem value="todos">Todos</MenuItem>
              <MenuItem value="pendiente_de_aprobacion">Pendiente</MenuItem>
              <MenuItem value="aprobada">Aprobada</MenuItem>
              <MenuItem value="finalizada">Finalizada</MenuItem>
              <MenuItem value="rechazada">Rechazada</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Divider sx={{ mb: 1 }} />
      <FractionateTable
        isLoading={isFetching}
        data={data?.response ?? []}
        pagination={{
          page,
          pageSize: rowsPerPage,
        }}
        count={data?.total || 0}
        onChangePagination={onChangePagination}
        rowSelectionModel={rowSelectionModel}
        setRowSelectionModel={setRowSelectionModel}
      />
    </CustomContainer>
  );
};

export default Stocks;
