import { Box, Typography } from "@mui/material";
import CustomContainer from "../../components/customContainer/CustomContainer";
import StockTable from "components/DataTable/StockTable";
import { useGetStocks } from "services/hooks/useGetStocks";
import { Navigate } from "react-router-dom";
import { GridPaginationModel } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import Loading from "components/Loading";

const Stocks = () => {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const { data, isFetching, isError, refetch } = useGetStocks({
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

  if (isFetching) return <Loading />;

  if (isError) return <Navigate to={"/notFound"} />;

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
      </Box>
      {data && (
        <StockTable
          isLoading={isFetching}
          data={data.response}
          pagination={
            {
              page,
              pageSize: rowsPerPage
            }
          }
          count={data.total}
          onChangePagination={onChangePagination}
        />
      )}
    </CustomContainer>
  );
};

export default Stocks;
