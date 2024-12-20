import {
  Box,
  Divider,
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
import { GridPaginationModel, GridRowSelectionModel } from "@mui/x-data-grid";
import React from "react";
import { getDisponible, getStockStatus, statusLabels } from "utils/helpers";
import ApproveStockSection from "components/ApproveStockSection";
import { useUpdateStockByIdMultiple } from "services/hooks/useUpdateStockByIdMultiple";
import Loading from "components/Loading";

const Stocks = () => {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [status, setStatus] = React.useState("todos");
  const [id, setId] = React.useState("");
  const [available, setAvailable] = React.useState("todos");
  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>([]);

  const { mutateAsync: updateStock, isPending } = useUpdateStockByIdMultiple({
    offset: page * rowsPerPage,
    limit: rowsPerPage,
    disponible: getDisponible(status),
    estado: getStockStatus(available),
    id,
  });

  const handleStatusChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  const { data, isFetching, isError } = useGetStocks({
    offset: page * rowsPerPage,
    limit: rowsPerPage,
    disponible: getDisponible(status),
    estado: getStockStatus(available),
    id,
  });

  const onApprove = () => {
    const items = data?.response.filter(
      (item) => rowSelectionModel.includes(item.id)
    );

    if (items?.length) {
      updateStock(items);
    }
  };

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

  const handleAvailableChange = (event: SelectChangeEvent) => {
    setAvailable(event.target.value as string);
  };

  if (isError) return <Typography>Error al cargar los stocks</Typography>;

  if (isPending) return <Loading />;

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

          <Box
            sx={{
              flexShrink: 0,
              flexDirection: "row",
              display: "flex",
              gap: 1,
            }}
          >
            <FormControl fullWidth size="small" sx={{ width: 200 }}>
              <InputLabel id="available-select-label">Estado</InputLabel>
              <Select
                labelId="available-select-label"
                id="available-select"
                value={available}
                label="Estado"
                onChange={handleAvailableChange}
              >
                <MenuItem value="todos">Todos</MenuItem>
                {statusLabels.map((status: any) => (
                  <MenuItem key={status.value} value={status.value}>
                    {status.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth size="small" sx={{ width: 200 }}>
              <InputLabel id="status-select-label">Estado</InputLabel>
              <Select
                labelId="status-select-label"
                id="status-select"
                value={status}
                label="Disponibilidad"
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
      <Divider />
      <ApproveStockSection
        rowSelectionModel={rowSelectionModel}
        status={status}
        setStatus={setStatus}
        subStatus={available}
        setSubStatus={setAvailable}
        onApprove={onApprove}
      />
      <StockTable
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
