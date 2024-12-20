import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import CustomContainer from "../../components/customContainer/CustomContainer";
import { Navigate, useParams } from "react-router-dom";
import CustomCard from "../../components/customCard/customCard";
import StockTable from "components/DataTable/StockTable";
import { useGetProduct } from "services/hooks/useGetProduct";
import { GridPaginationModel, GridRowSelectionModel } from "@mui/x-data-grid";
import React from "react";
import Loading from "components/Loading";
import { useGetStocksByProductId } from "services/hooks/useGetStocksByProductId";
import { getDisponible, getStockStatus, statusLabels } from "utils/helpers";
import { IProduct } from "types/product";
import ApproveStockSection from "components/ApproveStockSection";
import { useUpdateStockByIdMultiple } from "services/hooks/useUpdateStockByIdMultiple";

const ShowProduct = () => {
  const { productId = "" } = useParams();
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [status, setStatus] = React.useState("disponibles");
  const [available, setAvailable] = React.useState("en_stock");
  const [id, setId] = React.useState("");
  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>([]);

  const { data, isFetching, isError } = useGetProduct(productId);
  const { mutateAsync: updateStock, isPending } = useUpdateStockByIdMultiple({
    offset: page * rowsPerPage,
    limit: rowsPerPage,
    disponible: getDisponible(status),
    estado: getStockStatus(available),
    id,
  });

  const {
    data: stocks,
    isFetching: isFetchingStocks,
    isError: isErrorStocks,
  } = useGetStocksByProductId(productId, {
    offset: page * rowsPerPage,
    limit: rowsPerPage,
    disponible: getDisponible(status),
    estado: getStockStatus(available),
    id,
  });

  const handleStatusChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  const handleAvailableChange = (event: SelectChangeEvent) => {
    setAvailable(event.target.value as string);
  };

  const onChangePagination = (pagination: GridPaginationModel) => {
    if (page !== pagination.page) {
      setPage(pagination.page);
      return;
    }
    if (rowsPerPage !== pagination.pageSize)
      setRowsPerPage(pagination.pageSize);
  };

  const onApprove = () => {
    const items = stocks?.response.filter(
      (item) => rowSelectionModel.includes(item.id)
    );

    if (items?.length) {
      updateStock(items);
    }
  };

  // const onChangeIdSearch = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setId(e.target.value);
  // };

  const getStockDetails = () => {
    if (isErrorStocks) return <Typography>Error al cargar stocks</Typography>;

    return (
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            mb: 1,
          }}
        >
          {/* <Box
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
          </Box> */}

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
              <InputLabel id="status-select-label">Disponibilidad</InputLabel>
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
          isLoading={isFetchingStocks}
          data={stocks?.response ?? []}
          pagination={{
            page,
            pageSize: rowsPerPage,
          }}
          count={stocks?.total ?? 0}
          onChangePagination={onChangePagination}
          rowSelectionModel={rowSelectionModel}
          setRowSelectionModel={setRowSelectionModel}
        />
      </>
    );
  };

  if (isFetching || isPending) return <Loading />;

  if (isError) return <Navigate to="/notFound" />;

  return (
    <CustomContainer breadCrumbs>
      <Typography component="h1" variant="h5" gutterBottom>
        Detalle
      </Typography>
      <Box
        sx={{
          mb: 1,
        }}
      >
        {data && (
          <CustomCard
            product={data as IProduct & { metros_disponibles: number }}
            hiddenShowAction
          />
        )}
      </Box>
      {getStockDetails()}
    </CustomContainer>
  );
};

export default ShowProduct;
