import { Box, Typography } from "@mui/material";
import CustomContainer from "../../components/customContainer/CustomContainer";
import { Navigate, useParams } from "react-router-dom";
import CustomCard from "../../components/customCard/customCard";
import StockTable from "components/DataTable/StockTable";
import { useGetProduct } from "services/hooks/useGetProduct";
import { GridPaginationModel } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import Loading from "components/Loading";
import { useGetStocksByProductId } from "services/hooks/useGetStocksByProductId";

const ShowProduct = () => {
  const { productId = "" } = useParams();
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const { data, isFetching, isError } = useGetProduct(productId);

  const {
    data: stocks,
    isFetching: isFetchingStocks,
    isError: isErrorStocks,
    refetch,
  } = useGetStocksByProductId(productId, {
    offset: page * rowsPerPage,
    limit: rowsPerPage
  });

  const onChangePagination = (pagination: GridPaginationModel) => {
    if (page !== pagination.page) {
      setPage(pagination.page);
      return;
    }
    if (rowsPerPage !== pagination.pageSize)
      setRowsPerPage(pagination.pageSize);
  };

  useEffect(() => {
    refetch();
  }, [page, rowsPerPage]);

  const getStockDetails = () => {
    if (isErrorStocks) return <Typography>Error al cargar stocks</Typography>

    if (stocks && stocks.response.length === 0) return <Typography>El producto no tiene stock</Typography>

    return (
      <StockTable
          isLoading={isFetchingStocks}
          data={stocks?.response ?? []}
          pagination={{
            page,
            pageSize: rowsPerPage,
          }}
          count={stocks?.total ?? 0}
          onChangePagination={onChangePagination}
        />
    )
  }

  if (isFetching) return <Loading />;

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
        {data && <CustomCard product={data} hiddenActions />}
      </Box>
      {getStockDetails()}
    </CustomContainer>
  );
};

export default ShowProduct;
