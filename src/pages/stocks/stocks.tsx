import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import CustomContainer from "../../components/customContainer/CustomContainer";
import StockTable from "components/DataTable/StockTable";
import { useGetStocks } from "services/hooks/useGetStocks";
import { Navigate, useNavigate } from "react-router-dom";
import { GridPaginationModel } from "@mui/x-data-grid";
import React from "react";

const Stocks = () => {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [status, setStatus] = React.useState("disponibles");
  const [id, setId] = React.useState("");
  const navigate = useNavigate();

  const handleStatusChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  const getDisponible = (status: string) =>
    status === "todos" ? undefined : status === "disponibles" ? true : false;

  const { data, isFetching, isError } = useGetStocks({
    offset: page * rowsPerPage,
    limit: rowsPerPage,
    disponible: getDisponible(status),
    estado: "",
    id,
  });

  const onChangePagination = (pagination: GridPaginationModel) => {
    if (page !== pagination.page) {
      setPage(pagination.page);
      return;
    }
    if (rowsPerPage !== pagination.pageSize)
      setRowsPerPage(pagination.pageSize);
  };

  const onChangeIdSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setId(e.target.value);
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
          Stocks
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            <TextField
              value={id}
              onChange={onChangeIdSearch}
              size="small"
              label="Código"
            />
          </Box>

          <Box sx={{ flexShrink: 0, flexDirection: "row", display: "flex", gap: 1 }}>
            <FormControl fullWidth size="small">
              <InputLabel id="status-select-label">Estado</InputLabel>
              <Select
                labelId="status-select-label"
                id="status-select"
                value={status}
                label="Estado"
                onChange={handleStatusChange}
              >
                <MenuItem value="todos">Todos</MenuItem>
                <MenuItem value="disponibles">Disponibles</MenuItem>
                <MenuItem value="no_disponibles">No disponibles</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <StockTable
        isLoading={isFetching}
        data={data?.response ?? []}
        pagination={{
          page,
          pageSize: rowsPerPage,
        }}
        count={data?.total || 0}
        onChangePagination={onChangePagination}
      />
    </CustomContainer>
  );
};

export default Stocks;
