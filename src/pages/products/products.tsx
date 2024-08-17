import {
  Box,
  Typography,
  FormControlLabel,
  Switch,
  Button,
} from "@mui/material";
import CustomContainer from "../../components/customContainer/CustomContainer";
import CustomCard from "../../components/customCard/customCard";
import { SyntheticEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTodo } from "context/TodoContext";
import DataTable from "components/DataTable/DataTable";
import TablePaginationDemo from "components/TablePagination";
import React from "react";
import { useGetProducts } from "services/hooks/useGetProducts";
import { GridPaginationModel } from "@mui/x-data-grid";
import Loading from "components/Loading";

export const Products = () => {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const navigate = useNavigate();
  const { tableChecked, setTableChecked } = useTodo();

  const { data, isFetching, refetch } = useGetProducts({
    offset: page * rowsPerPage,
    limit: rowsPerPage,
  });

  useEffect(() => {
    refetch();
  }, [page, rowsPerPage]);

  const onChangePage = (page: number) => {
    setPage(page);
  };

  const onChangeRowsPerPage = (pages: number) => {
    setRowsPerPage(pages);
  };

  const onChangePagination = (pagination: GridPaginationModel) => {
    if (page !== pagination.page) {
      setPage(pagination.page);
      return;
    }
    if (rowsPerPage !== pagination.pageSize)
      setRowsPerPage(pagination.pageSize);
  };

  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    setTableChecked(checked);
  };

  const dataSection = () => {
    if (isFetching && !tableChecked)
      return (
        <Loading />
      );

    if (tableChecked) {
      return (
        <DataTable
          data={data?.response ?? []}
          count={data?.total ?? 0}
          isLoading={isFetching}
          pagination={{
            page,
            pageSize: rowsPerPage,
          }}
          onChangePagination={onChangePagination}
        />
      );
    }

    return (
      <>
        {data &&
          data.response.map((x, index) => (
            <CustomCard key={x.id} product={x} />
          ))}
      </>
    );
  };

  return (
    <CustomContainer>
      <Box
        sx={{
          mb: 1,
        }}
      >
        <Typography component="h1" variant="h5" gutterBottom>
          Productos
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <FormControlLabel
              control={
                <Switch
                  color="secondary"
                  name="Interruptor para cambiar tabla"
                  defaultChecked={tableChecked}
                  onChange={handleChange}
                />
              }
              label="Cambiar tabla"
            />
          </Box>

          <Box sx={{ flexShrink: 0 }}>
            <Button
              variant="contained"
              disableElevation
              color="secondary"
              onClick={() => navigate("/productos/crear")}
            >
              Agregar producto
            </Button>
          </Box>
        </Box>
      </Box>
      {dataSection()}
      {!tableChecked && <Box
          sx={{
            width: "100%",
            py: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TablePaginationDemo
            rowsPerPage={rowsPerPage}
            page={page}
            setRowsPerPage={onChangeRowsPerPage}
            setPage={onChangePage}
            count={data?.total ?? 0}
          />
        </Box>}
    </CustomContainer>
  );
};
