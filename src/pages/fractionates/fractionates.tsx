import {
  Box,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import CustomContainer from "../../components/customContainer/CustomContainer";
import { GridPaginationModel, GridRowSelectionModel } from "@mui/x-data-grid";
import React from "react";
import { useGetFractionates } from "services/hooks/useGetFractionates";
import FractionateTable from "components/DataTable/FractionTable";

const Stocks = () => {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [product_id, setProduct_id] = React.useState("");
  const [stock_id, setStock_id] = React.useState("");

  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>([]);

  const { data, isFetching, isError } = useGetFractionates({
    offset: page * rowsPerPage,
    limit: rowsPerPage,
    email,
    product_id,
    stock_id,
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
              value={email}
              onChange={onChangeEmailSearch}
              size="small"
              label="Email"
            />
            <TextField
              value={email}
              onChange={handleProduct_idChange}
              size="small"
              label="Producto"
            />
            <TextField
              value={email}
              onChange={handleStock_idChange}
              size="small"
              label="Stock"
            />
          </Box>
        </Box>
      </Box>
      <Divider />
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
